var resObj = erzXHRObjekt();

function sndReq(i) {
  resObj.onreadystatechange = () => {
    handleResponse(i);
  };

  resObj.open("get", "info" + i + ".txt", true);
  resObj.send(null);
}

function handleResponse(i) {
  if (resObj.status === 200 && resObj.readyState === 4) {
    document.getElementById("info" + i).innerHTML = resObj.responseText;
  }
}

function out(i) {
  document.getElementById("info" + i).innerHTML = "";
}

function init() {
  const images = document.getElementsByTagName("img");
  for (let i = 0; i < images.length; i++) {
    images[i].onmouseover = () => {
      sndReq(i);
    };
    images[i].onmouseout = () => {
      out(i);
    };
  }
}

window.onload = init;
