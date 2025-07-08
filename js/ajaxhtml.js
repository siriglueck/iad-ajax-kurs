var resObj = erzXHRObjekt();

function sndReq() {
    resObj.open( 'get', 'antwort-html.txt', true );
    resObj.onreadystatechange = handleResponse;
    resObj.send( null );
}

function handleResponse() {
    if( resObj.readyState == 4 ) {
        document.getElementById("antwort").innerHTML = resObj.responseText;
    }
}

function init() {
    document.getElementById("frage").onclick = sndReq;
}

document.addEventListener("DOMContentLoaded", init);