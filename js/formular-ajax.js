/* (globale) Variablen definieren */

let user;
let userinfo;
let pw;
let pwinfo;
let logout;
let frage;
let zurueck;
let resOb;
let f;

function sndReq() {
  let params = "user=" + user.value + "&pw=" + pw.value;
  resOb.onreadystatechange = handleResponse;
  resOb.open("get", "ajax.php?" + params, true);
  resOb.send(null);
}

function handleResponse() {
  if (resOb.readyState == 4) {
    antwort.innerHTML = resOb.responseText;
    user.value = "";
    user.disabled = true;
    user.style.backgroundColor = "grey";
    pw.value = "";
    pw.disabled = true;
    pw.style.backgroundColor = "grey";
    logout.style.display = "block";
    frage.style.display = "none";
    zurueck.style.display = "none";
  }
}

function plausi() {
  let fehler = false;
  meldungenLeeren();
  // Kontrolle Passwort
  if (pw.value == "") {
    pwinfo.innerHTML = "Das Passwort darf nicht leer sein";
    pw.style.backgroundColor = "red";
    pw.value = "";
    pw.focus();
    fehler = true;
  }
  // Kontrolle Userid
  if (user.value.length < 8) {
    userinfo.innerHTML = "Die Userid hat zu wenig Zeichen";
    user.style.backgroundColor = "red";
    user.value = "";
    user.focus();
    fehler = true;
  }

  if (!fehler) {
    fehler = false;
    sndReq();
  } else {
    return false;
  }
}

function zuruecksetzen() {
  if (confirm("Das Formular wird zurückgesetzt.\nSind Sie sicher?")) {
    meldungenLeeren();
    f.action = "";
    f.reset();
    return false;
  }
  return false;
}

function meldungenLeeren() {
  userinfo.innerHTML = "";
  pwinfo.innerHTML = "";
  user.style.backgroundColor = "white";
  pw.style.backgroundColor = "white";
}

function init() {
  /* Variablen initialisieren */
  user = document.getElementById("user");
  userinfo = document.getElementById("userinfo");
  pw = document.getElementById("pw");
  pwinfo = document.getElementById("pwinfo");
  logout = document.getElementById("logout");
  frage = document.getElementById("frage");
  zurueck = document.getElementById("zurueck");
  resOb = erzXHRObjekt();
  f = document.forms[0];
  antwort = document.getElementById("antwort");

  /* Ereignisfunktionen registrieren */
  frage.onclick = plausi;
  zurueck.onclick = zuruecksetzen;
}

document.addEventListener("DOMContentLoaded", init);
