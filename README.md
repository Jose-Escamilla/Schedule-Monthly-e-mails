## Descripción del Proyecto

Este repositorio contiene un script en [Google Apps Script](https://script.google.com/) diseñado para enviar correos electrónicos mensuales de manera automática. El script envía un correo electrónico con un archivo adjunto desde [Google Drive](https://www.google.com/drive/) a una dirección específica en fechas predefinidas.

### Funcionalidades

- **Envío de Correos Programado**: Envía un correo electrónico con un archivo adjunto el segundo día de cada mes a las 10:00 AM.
- **Configuración de Receptor y Asunto**: Permite especificar el destinatario del correo y el asunto.
- **Adjunto desde Google Drive**: Permite adjuntar un archivo desde Google Drive utilizando su ID.

### Cómo Usar

1. **Configuración Inicial**:
   - Reemplaza `recipient` con la dirección de correo electrónico del destinatario.
   - Reemplaza el ID del archivo en `DriveApp.getFileById("ID_DEL_ARCHIVO")` con el ID del archivo que deseas adjuntar. El ID del archivo es la parte del enlace entre `/d/` y `/view`. Puedes obtener este ID al hacer clic derecho sobre el archivo en Google Drive y seleccionar "Compartir", luego copiar el enlace y extraer el ID del archivo.
   - Actualiza las fechas en el arreglo `dates` según sea necesario.

2. **Implementación en Google Apps Script**:
   - Copia el script a un nuevo proyecto en [Google Apps Script](https://developers.google.com/apps-script).
   - Ejecuta `createTrigger()` para programar el envío automático de correos.

3. **Programación del Script**:
   - El script se ejecuta diariamente y envía correos solo en las fechas especificadas.

### Requisitos

- **[Google Apps Script](https://developers.google.com/apps-script)**: Asegúrate de tener acceso a Google Apps Script para ejecutar y programar el script.

### Contribuciones

Si deseas contribuir al proyecto, por favor, abre un **Issue** o envía un **Pull Request**.
