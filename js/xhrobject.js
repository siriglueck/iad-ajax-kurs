function erzXHRObjekt() {
  let responseObject = null;

  try {
    responseObject = new ActiveXObject("Microsoft.XMLHTTP");
  } catch (e) {
    try {
      responseObject = new ActiveXObject("MSXML2.XMLHTTP");
    } catch (e) {
      try {
        responseObject = new XMLHttpRequest();
      } catch (e) {
        alert(
          "Erzeugung des XHR-Objektes fehlgeschlagen.\r\nMeldung: " + e.message
        );
        return false;
      }
    }
  }

  return responseObject;
}
