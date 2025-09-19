# 📧 Automatización de Envío de Correos con Google Apps Script

## Descripción del Proyecto

Este repositorio contiene un script en [Google Apps Script](https://script.google.com/) diseñado para enviar correos electrónicos mensuales de manera automática. El script envía un correo electrónico con un archivo adjunto desde [Google Drive](https://www.google.com/drive/) a una dirección específica.

## Funcionalidades

- **Envío de Correos Programado**: Envía un correo electrónico con un archivo adjunto el **día 3 de cada mes** a las 10:00 AM.
- **Prevención de Triggers Duplicados**: Antes de crear un nuevo activador, elimina cualquier otro existente asociado a la función, evitando que el script se ejecute más de una vez en el mismo día.
- **Configuración de Receptor y Asunto**: Permite especificar el destinatario del correo y el asunto.
- **Adjunto desde Google Drive**: Permite adjuntar un archivo desde Google Drive utilizando su ID.

## Cómo Usar

1. **Configuración Inicial**:
   - Reemplaza `recipient` con la dirección de correo electrónico del destinatario.
   - Reemplaza el ID del archivo en  
     ```js
     DriveApp.getFileById("ID_DEL_ARCHIVO")
     ```  
     con el ID del archivo que deseas adjuntar.  
     El ID del archivo es la parte del enlace entre `/d/` y `/view`.  
     Puedes obtener este ID al hacer clic derecho sobre el archivo en Google Drive y seleccionar **Compartir**, luego copiar el enlace y extraer el ID del archivo.  
     ⚠️ En la parte de Acceso General selecciona: **Cualquier persona con el enlace** y el Rol como: **Lector**.

2. **Modificación del Día de Envío**:
   - Por defecto, el script envía el correo el **día 3 de cada mes**.  
   - Si deseas cambiar el día, modifica esta línea del código:  
     ```js
     if (today.getDate() === 3) {
     ```
     Por ejemplo, para que se ejecute el **día 15**, cámbialo a:  
     ```js
     if (today.getDate() === 15) {
     ```

3. **Implementación en Google Apps Script**:
   - Copia el script a un nuevo proyecto en [Google Apps Script](https://developers.google.com/apps-script).
   - Ejecuta `createTrigger()` para programar el envío automático de correos.

4. **Programación del Script**:
   - El script se ejecuta diariamente a las 10:00 AM.
   - Solo envía el correo si el **día del mes coincide con el configurado**.

## Requisitos

- **[Google Apps Script](https://developers.google.com/apps-script)**: Asegúrate de tener acceso a Google Apps Script para ejecutar y programar el script.

## Contribuciones

Si deseas contribuir al proyecto, por favor, abre un **Issue** o envía un **Pull Request**.
