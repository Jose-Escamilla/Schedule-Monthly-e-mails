function sendEmails() {
  var recipient = "baceves@sapal.gob.mx";
  var subject = "Solicitud de oportunidad laboral";

  // Cuerpo del correo
  var body = "Espero que este mensaje le encuentre bien. Mi nombre es José Escamilla, soy ingeniero mecatrónico con formación complementaria en Ciencias de la Computación. Aunque no concluí la maestría por motivos personales, esta experiencia fortaleció mis habilidades técnicas y mi enfoque multidisciplinario.\n\n" +
             "Actualmente me encuentro en búsqueda activa de oportunidades laborales donde pueda contribuir con mis conocimientos en ingeniería, programación y ciberseguridad, así como seguir creciendo profesionalmente en un entorno dinámico y desafiante.\n\n" +
             "Adjunto a este correo encontrará mi currículum vitae, el cual detalla mi trayectoria académica, experiencia docente, proyectos de investigación y certificaciones recientes. Estoy disponible para una entrevista en el momento que le resulte conveniente y quedo a disposición para proporcionar cualquier información adicional que considere necesaria.\n\n" +
             "Agradezco de antemano su tiempo y atención. Quedo atento a su respuesta.\n\n" +
             "Atentamente,\nIng. José Escamilla\nTel: 477 587 1596";

  // Archivo adjunto (CV) tomado de Google Drive, ID del archivo en Google Drive (entre /d/ y /view)
  var attachment = DriveApp.getFileById("1UgquspJNwCJunbepBBOoIzBpu2PDZw3u");

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
