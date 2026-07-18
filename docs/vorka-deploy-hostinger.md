# Publicar vorka.io en Hostinger

Hoy el sitio solo existe en tu máquina (`localhost:4327`). Estos son los pasos
para que quede en vivo en `vorka.io`. Son dos partes independientes: dominio
(DNS) y subida del sitio (hosting) — ninguna de las dos la puedo hacer yo,
necesitan tus credenciales de Hostinger/registrador.

## Parte 1 — Generar el build final

Cuando el sitio esté listo para publicar (fotos reales de portafolio,
webhook configurado):

```
npm run build
```

Esto genera la carpeta `dist/` con los archivos estáticos finales — eso es
literalmente lo que se sube a Hostinger, nada más.

Importante: hoy `dist/` contiene TODAS las páginas del repo (demos de
clientes incluidos, ej. `demo-el-fogon-ecuatoriano`). Antes de subir, hay que
decidir si `vorka.io` sube el `dist/` completo (y las demos quedan accesibles
por su URL propia, sin estar linkeadas desde ningún lado) o si conviene
separar esto en un proyecto/carpeta propia solo para Vorka. Lo más simple por
ahora: subir `dist/` completo, ya que las páginas de demo no son sensibles y
no están enlazadas desde `vorka.io`.

## Parte 2 — Apuntar el dominio vorka.io a Hostinger

1. Entra al panel de Hostinger (hPanel) con tu cuenta.
2. Ve a **Dominios** → selecciona `vorka.io` (o agrégalo si aún no está ahí).
3. Si el dominio se compró en otro registrador distinto de Hostinger:
   - En el panel de ese registrador, cambia los **nameservers** a los de
     Hostinger (Hostinger te los muestra en hPanel → Dominios → DNS/Nameservers,
     suelen ser algo como `ns1.dns-parking.com` / `ns2.dns-parking.com` o los
     propios de tu plan).
   - Este cambio puede tardar hasta 24-48 horas en propagarse (usualmente
     mucho menos).
4. Si el dominio ya está en Hostinger, solo asegúrate de que apunte al plan de
   hosting (reseller) donde vas a subir los archivos.

## Parte 3 — Subir el build

Opción simple (interfaz web, sin necesitar cliente FTP):

1. En hPanel, entra a **Archivos → Administrador de archivos** del plan de
   hosting.
2. Navega a la carpeta pública del sitio (normalmente `public_html` o, si
   usas subdominios/addon domains, la carpeta específica de `vorka.io`).
3. Sube el **contenido** de tu carpeta `dist/` (no la carpeta `dist` en sí,
   sino lo que está adentro: `index.html`, carpetas de assets, etc.) directo a
   esa carpeta pública.

Opción alternativa (más rápida si repites esto seguido): usar un cliente FTP
(ej. FileZilla) con las credenciales FTP que Hostinger te da en hPanel →
Archivos → Cuentas FTP.

## Parte 4 — Verificar

1. Espera a que el DNS propague (si acabas de cambiar nameservers).
2. Visita `https://vorka.io` en el navegador — debe cargar el sitio.
3. Prueba en móvil también (el checklist de conversión de CLAUDE.md aplica
   igual a la propia web de Vorka).

## Qué necesito de ti cuando llegue el momento

- Confirmar que tienes acceso al panel de Hostinger y al panel del
  registrador del dominio (si son distintos).
- Avisarme cuando quieras que generemos el build final — reviso que no falte
  nada (webhook, fotos, Instagram) antes de que lo subas.
