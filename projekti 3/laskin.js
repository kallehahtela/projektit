//valitaan kaikki buttonit
const napit = document.querySelectorAll('button');
// valitaan boksi näyttö (jonne luvut ilmestyvät)
const ruutu = document.querySelector('.ruutu');

//lisätään event listener kaikille buttoneille
napit.forEach(function(button) {
  button.addEventListener('click', laske);
});

//laske funtio, jota äsken kutsuttiin
function laske(event) {
  //klikatun napin arvo
  const klikattuNappi = event.target.value;

  if (klikattuNappi === '=') {
    //lasketaan vain jos ruutu ei ole tyhjä
    if (ruutu.value != '') {
      //laske ja näytä vastaus ruudussa
      ruutu.value = eval(ruutu.value);
    }
  } else if (klikattuNappi == 'reset') {
    //tyhjennä koko ruutu jos painettu nappi on reset nappi
    ruutu.value = '';
  } else if (klikattuNappi == 'delete') {
    //jos halutaan poistaa viimeisin klikattu numero
    ruutu.value = ruutu.value.slice(0, -1);
  } else {
    //jos klikattu nappi on jokin muu arvo, lisätään se ruutuun
    ruutu.value += klikattuNappi;
  }
}
