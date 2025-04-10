function sendEmails() {
    var recipient = "mbdiaz@sapal.gob.mx";
    var subject = "Solicitud de oportunidad laboral";
  
    // Cuerpo del correo
    var body = "Espero que este mensaje le encuentre bien. Mi nombre es José Escamilla, soy ingeniero mecatrónico con formación complementaria en Ciencias de la Computación. Aunque no concluí la maestría por motivos personales, esta experiencia fortaleció mis habilidades técnicas y mi enfoque multidisciplinario.\n\n" +
           "Actualmente me encuentro en búsqueda activa de oportunidades laborales donde pueda contribuir con mis conocimientos en ingeniería, programación y ciberseguridad, así como seguir creciendo profesionalmente en un entorno dinámico y desafiante.\n\n" +
           "Adjunto a este correo encontrará mi currículum vitae, el cual detalla mi trayectoria académica, experiencia docente, proyectos de investigación y certificaciones recientes. Estoy disponible para una entrevista en el momento que le resulte conveniente y quedo a disposición para proporcionar cualquier información adicional que considere necesaria.\n\n" +
           "Agradezco de antemano su tiempo y atención. Quedo atento a su respuesta.\n\n" +
           "Atentamente,\nIng. José Escamilla\nTel: 477 587 1596";

  
    var attachment = DriveApp.getFileById("1wQ0LOqxKw1nbckrwYXmVCYrzz_noqtpV"); // Reemplaza con el ID del archivo en Google Drive, el ID del archivo es la parte entre /d/ y /view. 
  
    // Define las fechas de envío
    var dates = ["2025-01-03", "2025-02-03", "2025-03-03", "2025-04-03", "2025-05-03", "2025-06-03", "2025-07-03", "2025-08-03", "2025-09-03", "2025-10-03", "2025-11-03", "2025-12-03"];
    var today = new Date();
    var todayString = Utilities.formatDate(today, Session.getScriptTimeZone(), "yyyy-MM-dd");
    
    if (dates.indexOf(todayString) > -1) {
      MailApp.sendEmail({
        to: recipient,
        subject: subject,
        body: body,
        attachments: [attachment]
      });
    }
  }
  
  // Programa el script para ejecutarse diariamente
  function createTrigger() {
    ScriptApp.newTrigger("sendEmails")
      .timeBased()
      .everyDays(1) // Ejecuta el script diariamente
      .atHour(10) // Ajusta la hora según tu preferencia, en este caso es las 10 am.
      .create();
  }
  
