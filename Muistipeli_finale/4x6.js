const kortit = document.querySelectorAll('.pelikortti');

let korttiKaannetty = false;
let lukitsePeli = false;
let ekaKortti, tokaKortti;

//Kortin kääntäminen
function kaannaKortti() {
  //jos peli on "lukittu"eli yksi pari on jo valittu, fuktio ei käynnisty
  if (lukitsePeli) return;
  //estetään saman kortin valinta kahdesti
  if (this === ekaKortti) return;

  //antaa pelikortille classin 'flip'
  this.classList.toggle('flip');

  if (!korttiKaannetty) {
    //ensimmäisen klikkauksen valinta
    korttiKaannetty = true;
    ekaKortti = this;
    return;
  }
    //toinen klikkaus
    korttiKaannetty = false;
    tokaKortti = this;

    tarkistaPari();
}
//tarkistetaan pari datasetin avulla
function tarkistaPari() {
  let ovatPari = ekaKortti.dataset.kehys === tokaKortti.dataset.kehys;
  //jos kortit ovat pari estetään niitä kääntymästä ja
  //jos kortit eivät ole pari käännetään ne takaisin
  ovatPari ? disable() : unflip();
}
//jättää parin näkyville
function disable() {
  ekaKortti.removeEventListener('click', kaannaKortti);
  tokaKortti.removeEventListener('click', kaannaKortti);
  reset();
}

function unflip() {
  //estää muiden korttien valitsemisen kun funktio on vielä kesken
  lukitsePeli = true;
  //kortti pysyy näkyvillä hetken, ennenkuin kääntyy taas
  setTimeout(() => {
    ekaKortti.classList.remove('flip');
    tokaKortti.classList.remove('flip');
  //nollaa pelin jotta kortteja voidaan taas valita
    reset();
  }, 1500);
}

function reset() {
  //resetoidaan peli uusia valintoja varten
  [korttiKaannetty,lukitsePeli] = [false,false];
  [ekaKortti,tokaKortti] = [null,null];
}
//ekstra sulkujen vuoksi funktio kutsutaan heti
//sekoitetaan pelikortit antamalla niiden järjestysluvuksi satunnainen luku
(function sekoitaKortit() {
  kortit.forEach(kortti => {
    let satunnainenNro = Math.floor(Math.random()*24);
    kortti.style.order = satunnainenNro;
  });
})();

//aloita uusi peli
function newGame() {
  location.reload();
  return false;
}
//lisätään kortteihin eventlistener jotta ne kääntyvät klikatessa
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