function sendEmails() {
  var recipient = "DIRECCION-DEL-DESTINATARIO";
  var subject = "Solicitud de oportunidad laboral";

  // Cuerpo del correo
  var body = "Mi nombre es José Escamilla, ingeniero mecatrónico con experiencia en automatización, " +
           "diseño de sistemas embebidos, programación de PLCs Siemens y diseño de PCBs. " +
           "Me dirijo a ustedes con interés genuino en formar parte del equipo de SAPAL, " +
           "una institución clave para la infraestructura de León.\n\n" +
           "A lo largo de mi trayectoria he desarrollado soluciones técnicas en entornos de " +
           "ingeniería e investigación, combinando conocimientos en hardware, software y automatización " +
           "industrial. Adjunto mi CV donde podrá encontrar el detalle de mi experiencia y certificaciones.\n\n" +
           "Quedo a disposición para una entrevista y con gusto amplío cualquier información.\n\n" +
           "Atentamente,\nIng. José Escamilla\nTel: 477 000 0000";

  // Archivo adjunto (CV) tomado de Google Drive, ID del archivo en Google Drive (entre /d/ y /view)
  var attachment = DriveApp.getFileById("ID_DEL_ARCHIVO");

  // Verifica si hoy es día 3 del mes
  var today = new Date();
  if (today.getDate() === 3) {
    MailApp.sendEmail({
      to: recipient,
      subject: subject,
      body: body,
      attachments: [attachment]
    });
  }
}

// Crea un trigger diario pero evitando duplicados
function createTrigger() {
  // Elimina triggers duplicados de "sendEmails"
  var triggers = ScriptApp.getProjectTriggers();
  for (var i = 0; i < triggers.length; i++) {
    if (triggers[i].getHandlerFunction() === "sendEmails") {
      ScriptApp.deleteTrigger(triggers[i]);
    }
  }

  // Crea un trigger que se ejecuta todos los días a las 10 AM
  ScriptApp.newTrigger("sendEmails")
    .timeBased()
    .everyDays(1) // Se ejecuta diariamente
    .atHour(10)   // A las 10 AM
    .create();
}
