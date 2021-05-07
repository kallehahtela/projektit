var clicks = 0;

function lasku() {
  clicks += 1;
  document.getElementById("clicks").innerHTML = clicks;
};


const kortit = document.querySelectorAll('.pelikortti');

let korttiKaannetty = false;
let lukitsePeli = false;
let ekaKortti, tokaKortti;


function kaannaKortti() {

  if (lukitsePeli) return;

  if (this === ekaKortti) return;


  this.classList.toggle('flip');

  if (!korttiKaannetty) {

    korttiKaannetty = true;
    ekaKortti = this;
    return;
  }

    korttiKaannetty = false;
    tokaKortti = this;

    tarkistaPari();
}

function tarkistaPari() {
  let ovatPari = ekaKortti.dataset.kehys === tokaKortti.dataset.kehys;

  ovatPari ? disable() : unflip();
}

function disable() {
  ekaKortti.removeEventListener('click', kaannaKortti);
  tokaKortti.removeEventListener('click', kaannaKortti);
  reset();
}

function unflip() {

  lukitsePeli = true;

  setTimeout(() => {
    ekaKortti.classList.remove('flip');
    tokaKortti.classList.remove('flip');

    reset();
  }, 1500);
}

function reset() {

  [korttiKaannetty,lukitsePeli] = [false,false];
  [ekaKortti,tokaKortti] = [null,null];
}

(function sekoitaKortit() {
  kortit.forEach(kortti => {
    let satunnainenNro = Math.floor(Math.random()*16);
    kortti.style.order = satunnainenNro;
  });
})();


function newGame() {
  location.reload();
  return false;
}

kortit.forEach(kortti => kortti.addEventListener('click',kaannaKortti));

var sec = 0;
var stoptime = true;

function startTimer()
{
  if (stoptime == true) {
        stoptime = false;
        timerCycle();
    }
}
function stopTimer() 
{
  if (stoptime == false) {
    stoptime = true;
  }
}

function timerCycle() 
{
    if (stoptime == false) {
    sec = parseInt(sec);
    min = parseInt(min);
    hr = parseInt(hr);

    sec = sec + 1;

    if (sec == 60) {
      min = min + 1;
      sec = 0;
    }
    if (min == 60) {
      hr = hr + 1;
      min = 0;
      sec = 0;
    }

    if (sec < 10 || sec == 0) {
      sec = '0' + sec;
    }
    if (min < 10 || min == 0) {
      min = '0' + min;
    }
    if (hr < 10 || hr == 0) {
      hr = '0' + hr;
    }

    timer.innerHTML = hr + ':' + min + ':' + sec;

    setTimeout("timerCycle()", 1000);
  }
}

    
function resetTimer() 
{
    timer.innerHTML = "00:00:00";
    stoptime = true;
    hr = 0;
    sec = 0;
    min = 0;
}