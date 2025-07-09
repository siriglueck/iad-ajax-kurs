var resObj = erzXHRObjekt();

function handleResponse() {
  if (resObj.readyState === 4 && resObj.status === 200) {
    document.getElementById("antwort").innerHTML = resObj.responseText;
  }
}

function sndReqGET() {
  // Parameter zum Senden in Variable ablegen
  let params = "user=admin&passwort=geheim";

  // GET-Verbindung öffnen
  resObj.open("get", "daten-senden.php?" + params, true);
  resObj.onreadystatechange = handleResponse;
  resObj.send(null);
}

function sndReqPOST() {
  // Parameter zum Senden an Variable ablegen
  let params = "blz=90150001&ktonr=471107";

  // POST-Verbindung öffnen
  resObj.open("post", "daten-senden.php", true);

  // Header-Info zum Mime-Type der gesendeten Parameter festlagen
  resObj.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

  // Header-Info zur Länge der gesendeten Daten festlegen
  //resObj.setRequestHeader("Content-length", params.length);

  // Funktion referenzieren bei Änderung des Status der Server-Antwort
  resObj.onreadystatechange = handleResponse;

  // Daten mit angehängten Parametern senden
  resObj.send(params);
}

function init() {
  document.getElementById("sendeget").onclick = sndReqGET;
  document.getElementById("sendepost").onclick = sndReqPOST;
}

document.addEventListener("DOMContentLoaded", init);
