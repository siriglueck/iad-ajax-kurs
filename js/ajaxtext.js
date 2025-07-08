let resObj = erzXHRObjekt();

function sndReq() {
    resObj.open( 'get', 'antwort.txt', true );
    resObj.onreadystatechange = handleResponse;
    resObj.send( null );
}

function handleResponse() {
    
}

function init() {
    document.getElementById("frage").onclick = sndReq;
}

document.addEventListener("DOMContentLoaded", init);