/**
 * ScrollSequence — sección que reproduce una secuencia de frames WebP
 * sobre <canvas>, en uno de dos modos:
 *
 * - mode 'scrub' (pinned): GSAP ScrollTrigger con scrub — el progreso 0→1
 *   del scroll se mapea al índice de frame, en ambas direcciones.
 * - mode 'autoplay': sin pin — cuando la sección entra al viewport se
 *   reproduce la secuencia completa UNA vez a fps fijo (como un video),
 *   y queda en el último frame.
 *
 * Común a ambos modos:
 * - Dibujo tipo object-fit: cover, devicePixelRatio con cap a 2.
 * - Repinta solo vía requestAnimationFrame y solo si cambió el frame.
 * - Precarga progresiva: IntersectionObserver (rootMargin generoso)
 *   dispara la carga — primero 1 de cada 4 frames, luego el relleno.
 *   Nada se carga en la carga inicial de la página.
 * - Fallback: prefers-reduced-motion o error de red → imagen estática.
 * - HUD de depuración con ?debug=1.
 *
 * Portado desde SiteWise+ (caso El Fogón Ecuatoriano) para la Fase 3 del
 * rediseño de /vorka/ — ver CLAUDE.md, PROMPT MAESTRO. Sin cambios de
 * comportamiento respecto al original; solo integración con Astro/Vite.
 */

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export interface ScrollSequenceOptions {
  /** Sección contenedora. Debe contener un <canvas> y opcionalmente overlays. */
  section: HTMLElement;
  /** Nombre de la secuencia: public/frames/<seqName>/… */
  seqName: string;
  frameCount: number;
  /** 'scrub' (default): pinned, atado al scroll. 'autoplay': se reproduce
   *  una vez al entrar al viewport. */
  mode?: 'scrub' | 'autoplay';
  /** Solo scrub: longitud del pin en unidades de viewport (300 → '+=300%'). */
  pinVh?: number;
  /** Solo autoplay: fotogramas por segundo (default 20 — clip de 6 s). */
  fps?: number;
  /** Imagen estática de fallback (reduced motion / error de carga). */
  posterSrc: string;
  /** Callback de progreso 0→1 para sincronizar overlays externos. */
  onProgress?: (progress: number) => void;
}

const DPR_CAP = 2;

export class ScrollSequence {
  private readonly opts: ScrollSequenceOptions;
  private readonly canvas: HTMLCanvasElement;
  private readonly ctx: CanvasRenderingContext2D;
  private readonly frames: (HTMLImageElement | null)[];
  private readonly variant: 'desktop' | 'mobile';

  private currentIndex = 0;
  private lastDrawnIndex = -1;
  private rafPending = false;
  private loadStarted = false;
  private loadedCount = 0;
  private failed = false;
  private hud: HTMLElement | null = null;

  // autoplay
  private playing = false;
  private played = false;
  private visible = false;

  constructor(opts: ScrollSequenceOptions) {
    this.opts = opts;
    const canvas = opts.section.querySelector('canvas');
    if (!canvas) throw new Error(`ScrollSequence: falta <canvas> en la sección ${opts.seqName}`);
    this.canvas = canvas;
    const ctx = canvas.getContext('2d');
    if (!ctx) throw new Error('ScrollSequence: canvas 2d no disponible');
    this.ctx = ctx;
    this.frames = new Array(opts.frameCount).fill(null);
    this.variant = window.matchMedia('(max-width: 768px)').matches ? 'mobile' : 'desktop';

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      this.enableFallback();
      return;
    }

    this.resizeCanvas();
    window.addEventListener('resize', () => {
      this.resizeCanvas();
      this.lastDrawnIndex = -1; // forzar repintado al nuevo tamaño
      this.scheduleDraw();
    });

    if ((this.opts.mode ?? 'scrub') === 'scrub') {
      this.initScrollTrigger();
    } else {
      this.initAutoplayTrigger();
    }
    this.initLazyPreload();
    if (new URLSearchParams(location.search).has('debug')) this.initHud();
  }

  private frameUrl(index: number): string {
    const n = String(index + 1).padStart(4, '0');
    return `${import.meta.env.BASE_URL}frames/${this.opts.seqName}/${this.variant}/frame-${n}.webp`;
  }

  // ---------- carga ----------

  private initLazyPreload(): void {
    const observe = () => {
      const io = new IntersectionObserver(
        (entries) => {
          if (entries.some((e) => e.isIntersecting)) {
            io.disconnect();
            void this.loadAll();
          }
        },
        // Empieza a cargar cuando la sección está a un viewport de distancia.
        { rootMargin: '100% 0%' },
      );
      io.observe(this.opts.section);
    };
    // La carga inicial de la página nunca dispara la secuencia: el observer
    // se activa recién con el primer scroll del usuario (o si la página ya
    // abre desplazada, p. ej. con un ancla).
    if (window.scrollY > 0) {
      observe();
    } else {
      window.addEventListener('scroll', observe, { once: true, passive: true });
    }
  }

  private async loadAll(): Promise<void> {
    if (this.loadStarted) return;
    this.loadStarted = true;
    const total = this.opts.frameCount;
    const coarse: number[] = [];
    const fill: number[] = [];
    for (let i = 0; i < total; i++) (i % 4 === 0 ? coarse : fill).push(i);
    await this.loadBatch(coarse);
    await this.loadBatch(fill);
    // En modo autoplay: si la sección ya está visible, arranca la reproducción.
    this.maybeStartPlayback();
  }

  /** Carga un lote con concurrencia limitada, esperando decode() por frame. */
  private async loadBatch(indices: number[]): Promise<void> {
    const CONCURRENCY = 8;
    let cursor = 0;
    const worker = async () => {
      while (cursor < indices.length) {
        const index = indices[cursor++];
        try {
          const img = new Image();
          img.src = this.frameUrl(index);
          await img.decode();
          this.frames[index] = img;
          this.loadedCount++;
          // Si el scroll está esperando justo este frame (o uno cercano), repintar.
          if (this.nearestLoaded(this.currentIndex) === index) this.scheduleDraw();
          this.updateHud();
        } catch {
          if (!this.failed && this.loadedCount === 0) {
            // Primer frame ya falló: tratamos la secuencia como no disponible.
            this.failed = true;
            this.enableFallback();
            return;
          }
        }
      }
    };
    await Promise.all(Array.from({ length: CONCURRENCY }, worker));
  }

  private nearestLoaded(target: number): number {
    if (this.frames[target]) return target;
    for (let d = 1; d < this.opts.frameCount; d++) {
      if (this.frames[target - d]) return target - d;
      if (this.frames[target + d]) return target + d;
    }
    return -1;
  }

  // ---------- scroll ----------

  private initScrollTrigger(): void {
    ScrollTrigger.create({
      trigger: this.opts.section,
      start: 'top top',
      end: `+=${this.opts.pinVh ?? 300}%`,
      pin: true,
      scrub: 0.5,
      onUpdate: (self) => {
        const index = Math.min(
          this.opts.frameCount - 1,
          Math.round(self.progress * (this.opts.frameCount - 1)),
        );
        this.currentIndex = index;
        this.opts.onProgress?.(self.progress);
        this.updateHud(self.progress);
        this.scheduleDraw();
      },
    });
  }

  // ---------- autoplay ----------

  /** Reproduce la secuencia completa una vez cuando la sección es visible. */
  private initAutoplayTrigger(): void {
    const io = new IntersectionObserver(
      (entries) => {
        this.visible = entries.some((e) => e.isIntersecting);
        if (this.visible) this.maybeStartPlayback();
      },
      // Arranca cuando al menos la mitad de la sección está en pantalla.
      { threshold: 0.5 },
    );
    io.observe(this.opts.section);
  }

  private maybeStartPlayback(): void {
    if (this.playing || this.played || this.failed || !this.visible) return;
    // Espera a tener la secuencia completa para que se vea fluida de una vez.
    if (this.loadedCount < this.opts.frameCount) return;
    this.playing = true;
    const fps = this.opts.fps ?? 20;
    const durationMs = (this.opts.frameCount / fps) * 1000;
    let start: number | null = null;
    const tick = (now: number) => {
      if (start === null) start = now;
      const progress = Math.min(1, (now - start) / durationMs);
      this.currentIndex = Math.min(
        this.opts.frameCount - 1,
        Math.round(progress * (this.opts.frameCount - 1)),
      );
      this.opts.onProgress?.(progress);
      this.updateHud(progress);
      this.scheduleDraw();
      if (progress < 1) {
        requestAnimationFrame(tick);
      } else {
        this.playing = false;
        this.played = true; // se reproduce una sola vez; queda en el último frame
      }
    };
    requestAnimationFrame(tick);
  }

  // ---------- dibujo ----------

  private resizeCanvas(): void {
    const dpr = Math.min(window.devicePixelRatio || 1, DPR_CAP);
    const { clientWidth, clientHeight } = this.canvas;
    this.canvas.width = Math.round(clientWidth * dpr);
    this.canvas.height = Math.round(clientHeight * dpr);
  }

  private scheduleDraw(): void {
    if (this.rafPending || this.failed) return;
    this.rafPending = true;
    requestAnimationFrame(() => {
      this.rafPending = false;
      const index = this.nearestLoaded(this.currentIndex);
      if (index === -1 || index === this.lastDrawnIndex) return;
      this.drawFrame(index);
      this.lastDrawnIndex = index;
    });
  }

  /** Dibuja con recorte tipo object-fit: cover. */
  private drawFrame(index: number): void {
    const img = this.frames[index];
    if (!img) return;
    const { width: cw, height: ch } = this.canvas;
    const scale = Math.max(cw / img.naturalWidth, ch / img.naturalHeight);
    const dw = img.naturalWidth * scale;
    const dh = img.naturalHeight * scale;
    this.ctx.drawImage(img, (cw - dw) / 2, (ch - dh) / 2, dw, dh);
  }

  // ---------- fallback ----------

  private enableFallback(): void {
    this.canvas.remove();
    const img = new Image();
    img.src = this.opts.posterSrc;
    img.alt = '';
    img.loading = 'lazy';
    img.className = 'seq-fallback';
    this.opts.section.prepend(img);
    this.opts.section.classList.add('seq-static');
    // Los overlays quedan visibles de forma estática.
    this.opts.onProgress?.(1);
  }

  // ---------- HUD ----------

  private initHud(): void {
    this.hud = document.createElement('div');
    this.hud.className = 'seq-hud';
    this.opts.section.appendChild(this.hud);
    this.updateHud(0);
  }

  private updateHud(progress?: number): void {
    if (!this.hud) return;
    const p = progress !== undefined ? `${(progress * 100).toFixed(1)}%` : '—';
    this.hud.textContent =
      `${this.opts.seqName} [${this.variant}] · frame ${this.currentIndex + 1}/${this.opts.frameCount}` +
      ` · cargados ${this.loadedCount} · progreso ${p}`;
  }
}
