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
//tarkistetaan pari
function tarkistaPari() {
  let ovatPari = ekaKortti.dataset.kehys === tokaKortti.dataset.kehys;
  //jos kortit ovat pari estetään niitä kääntymästä
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
