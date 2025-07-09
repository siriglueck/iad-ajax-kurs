var resObj = erzXHRObjekt();

function sndReq() {
  resObj.onreadystatechange = () => {
    handleResponse();
  };
  resObj.open("get", "uebung1.xml", true);
  resObj.send(null);
}

function handleResponse() {
  let daten = null;
  if (resObj.status === 200 && resObj.readyState === 4) {
    daten = resObj.responseXML;
    console.log(resObj);
    if (daten !== null) {
        document.querySelector("#info" + i).innerHTML =
        daten.querySelectorAll("info")[i].firstChild.data;
    } else {
      document.querySelector("#debug").innerHTML =
        "Leider keiner XML-Daten gefunden";
    }
  }
}

function init() {
  sndReq();
}

document.addEventListener("DOMContentLoaded", init);
