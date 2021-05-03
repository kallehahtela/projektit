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
