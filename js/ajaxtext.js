// 1. Erzeuge XHR-Objekt
let resObj = erzXHRObjekt();

function sndReq() {
  // 2. Callback-Funktion registrieren
  resObj.onreadystatechange = handleResponse;

  // 3. Verbindung
  // true = async
  resObj.open("get", "antwort.txt", true);

  // 4. Anfrage absenden und auf Antwort warten
  // Das Parameter der send()-Methode ist beim Versenden mit get immer null
  resObj.send(null);
}

function handleResponse() {
  // 5.Verarbeitung der Antwort des Servers
  // console.log(resObj);

  if(resObj.status === 200 && resObj.readyState === 4) {
    let antwort = document.querySelector("#antwort");
    antwort.innerHTML = resObj.responseText;

    antwort.innerHTML += "<hr>Status: " + resObj.status;
    antwort.innerHTML += "<br>Status-Text: " + resObj.statusText;
    antwort.innerHTML += "<br>Header-Infos: " + resObj.getAllResponseHeaders();
  }
}

function init() {
  document.getElementById("frage").onclick = sndReq;
}

document.addEventListener("DOMContentLoaded", init);
