function sendEmails() {
    var recipient = "mbdiaz@sapal.gob.mx";
    var subject = "Oportunidad de Empleo";
  
    // Cuerpo del correo
    var body = "Espero que este mensaje le encuentre bien. Me llamo José Escamilla y me pongo en contacto con usted para expresar mi interés en alguna oportunidad de empleo dentro de su empresa.\n\n" +
               "Recientemente, estudié una maestría en Ciencias de la Computación, consolidando así mis conocimientos en este campo en constante evolución. Cabe destacar que poseo una sólida formación como ingeniero mecatrónico, lo que me ha brindado una perspectiva integral y multidisciplinaria para abordar problemas desde diferentes ángulos.\n\n" +
               "En mi búsqueda activa de oportunidades laborales, estoy particularmente interesado en unirme a su equipo para contribuir con mi experiencia y adquirir valiosa experiencia laboral.\n\n" +
               "Adjunto a este correo, encontrará mi currículum vitae, donde detallo mi historial académico y experiencia profesional. Estoy disponible para una entrevista en cualquier momento que le resulte conveniente, y estoy dispuesto a proporcionar cualquier información adicional que pueda necesitar.\n\n" +
               "Agradezco de antemano su tiempo y consideración, quedo a la espera de su respuesta.\n\n" +
               "Atentamente,\nIng. José Escamilla\nTel: 4775871596";
  
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
  