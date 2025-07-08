var resObj = erzXHRObjekt();

function sndReq(i) {

}

function handleResponse(i) {

}

function out() {

}

function init() {
  const images = document.getElementsByTagName("img");
  for( let i = 0; i < images; i++) {
    images[i].onmouseover = () => { sndReq(i); }
    images[i].onmouseout = out;
  }
}

window.onload = init;