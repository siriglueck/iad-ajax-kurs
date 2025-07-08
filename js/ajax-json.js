var resObj = erzXHRObjekt();

function sndReq( i ) {
    resObj.open( 'get', 'info-json.txt', true );
    resObj.onreadystatechange = function() {
        handleResponse( i );
    }
    resObj.send( null );
}

function handleResponse( i ) {
    var daten = null;
    if( resObj.readyState == 4 ) {
        
        
    }
}

function out() {
    for( i = 0; i < 3; i++ ) {
        document.getElementById("info" + i).innerHTML = "";
    }
}

function init() {
    document.getElementsByTagName("img")[0].onmouseover = function() {
        sndReq(0);
    }
    document.getElementsByTagName("img")[1].onmouseover = function() {
        sndReq(1);
    }
    document.getElementsByTagName("img")[2].onmouseover = function() {
        sndReq(2);
    }
    
    document.getElementsByTagName("img")[0].onmouseout = function() {
        out();
    }
    document.getElementsByTagName("img")[1].onmouseout = function() {
        out();
    }
    document.getElementsByTagName("img")[2].onmouseout = function() {
        out();
    }
}

document.addEventListener("DOMContentLoaded", init);