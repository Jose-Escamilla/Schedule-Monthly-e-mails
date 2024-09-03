function sendEmails() {
    var recipient = "mbdiaz@sapal.gob.mx";
    var subject = "Oportunidad de Empleo";
  
    // Cuerpo del correo
    var body = "Espero que este mensaje le encuentre bien. Mi nombre es José Escamilla, soy ingeniero mecatrónico de formación y he cursado una maestría en Ciencias de la Computación, aunque no la concluí por razones personales. Actualmente estoy deseoso de seguir aprendiendo y adquiriendo experiencia laboral en un entorno dinámico.\n\n" +
               "En mi búsqueda activa de nuevas oportunidades laborales, estoy especialmente interesado en unirme a su equipo para aportar mi experiencia y seguir desarrollándome profesionalmente en un entorno desafiante.\n\n" +
               "Adjunto a este correo encontrará mi currículum vitae, donde detallo mi historial académico y mi experiencia profesional. Estoy disponible para una entrevista en el momento que le resulte más conveniente y estaré encantado de proporcionar cualquier información adicional que considere necesaria.\n\n" +
               "Agradezco de antemano su tiempo y atención. Quedo a la espera de su respuesta.\n\n" +
               "Atentamente,\nIng. José Escamilla\nTel: 477XXXXXXX";
  
    var attachment = DriveApp.getFileById("1Fwd29QE5iVQLlpGCCC1VCwrkXb3Bj30M"); // Reemplaza con el ID del archivo en Google Drive, el ID del archivo es la parte entre /d/ y /view. 
  
    // Define las fechas de envío
    var dates = ["2024-09-02", "2024-10-02", "2024-11-02", "2025-12-02", "2025-01-02", "2025-02-02", "2025-03-02", "2025-04-02", "2025-05-02", "2025-06-02", "2025-07-02", "2025-08-02", "2025-09-02"];
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
  
