const kortit = document.querySelectorAll('.kortti');

function kaannaKortti() {
  this.class.toggle('flip');
}

kortit.forEach(kortti => kortti.addEventListener('click',kaannaKortti));
