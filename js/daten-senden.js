var resObj = erzXHRObjekt();

function handleResponse() {
    if( resObj.readyState == 4 ) {
        document.getElementById("antwort").innerHTML = resObj.responseText;
    }
}

function sndReqGET() {
    // Parameter zum Senden in Variable ablegen
    var params = "user=admin&passwort=geheim";
    
    // GET-Verbindung öffnen
    
}

function sndReqPOST() {
    // Parameter zum Senden an Variable ablegen
    
    
    // POST-Verbindung öffnen
    
    
    // Header-Info zum Mime-Type der gesendeten Parameter festlagen
    
    
    // Header-Info zur Länge der gesendeten Daten festlegen
    
    
    // Funktion referenzieren bei Änderung des Status der Server-Antwort
    
    
    // Daten mit angehängten Parametern senden
    
}

function init() {
    document.getElementById("sendeget").onclick = sndReqGET;
    document.getElementById("sendepost").onclick = sndReqPOST;
}

document.addEventListener("DOMContentLoaded", init);










