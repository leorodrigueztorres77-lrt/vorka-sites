# Configurar Zapier para el formulario de contacto de Vorka

El formulario ya está listo para enviar los datos (nombre, negocio, whatsapp,
mensaje) por POST en JSON a cualquier URL que le configures. Solo falta crear
el "Zap" y pegar la URL resultante en `site.vorka.ts`.

## Pasos en Zapier

1. Entra a [zapier.com](https://zapier.com) e inicia sesión (o crea una cuenta
   gratis).
2. Clic en **Create Zap**.
3. En el paso "Trigger" (disparador), busca **Webhooks by Zapier**.
4. Elige el evento **Catch Hook** (o "Catch Raw Hook").
5. Zapier te da una URL única, algo como:
   `https://hooks.zapier.com/hooks/catch/123456/abcdef/`
   — esa es la URL que necesitamos.
6. En el paso "Action" (acción), agrega lo que quieras que pase con cada envío:
   - **Email by Zapier** → te llega un correo a tu Hotmail con los datos, o
   - **Google Sheets** → cada envío se agrega como fila nueva en una hoja, o
     ambas acciones en el mismo Zap si quieres las dos cosas.
7. Activa el Zap (toggle "On").
8. Copia la URL del paso 5 y pásamela — la pego directamente en
   `src/data/site.vorka.ts`, campo `webhookContactoUrl`.

## Recomendación práctica

Si quieres recibirlo en tu Hotmail: usa la acción **Email by Zapier**
(no necesitas conectar tu cuenta de correo, Zapier envía el email él mismo).
Si además quieres un historial ordenado de todos los leads, agrega también
**Google Sheets** como segunda acción en el mismo Zap — mismo trigger, dos
acciones.

## Cómo probarlo una vez configurado

1. Pásame la URL del webhook.
2. La actualizo en el código y hago un build.
3. Envías un mensaje de prueba desde el formulario en `http://localhost:4327/vorka/#contacto`.
4. Confirmas que te llegó el email (o la fila en Sheets).
