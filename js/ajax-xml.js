let resObj = erzXHRObjekt();

function sndReq(i) {
  resObj.onreadystatechange = () => {
    handleResponse(i);
  };
  resObj.open("get", "info.xml", true);
  resObj.send(null);
}

function handleResponse(i) {
  let daten = null;

  if (resObj.status === 200 && resObj.readyState === 4) {
    //console.log(resObj);

    daten = resObj.responseXML;
    if (daten !== null) {
      document.querySelector("#info" + i).innerHTML =
        daten.querySelectorAll("info")[i].firstChild.data;
    } else {
      document.querySelector("#debug").innerHTML =
        "Leider keiner XML-Daten gefunden";
    }
  }
}

function out(i) {
  document.querySelector("#info" + i).innerHTML = "";
}

function init() {
  const images = document.querySelectorAll("img");
  for (let i = 0; i < images.length; i++) {
    images[i].onmouseover = () => {
      sndReq(i);
    };
    images[i].onmouseout = () => {
      out(i);
    };
  }
}

document.addEventListener("DOMContentLoaded", init);
