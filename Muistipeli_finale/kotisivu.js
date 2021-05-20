function tarkistaKirjautuminen(form) {

const tunnus = form.tunnus.value;
const salasana = form.salasana.value;
const kirjauduButton = document.getElementById('kirjaudu-button');
var viesti = document.getElementById('message');

  if (tunnus == '' && salasana == '') {
    viesti.innerHTML = 'Syötä käyttäjätunnus ja salasana!';
    viesti.style.color = 'red';
    return false;
  }
  if (tunnus == ''){
    viesti.innerHTML = 'Syötä käyttäjätunnus!';
    viesti.style.color = 'red';
    return false;
  }
  if (salasana == ''){
    viesti.innerHTML = 'Syötä salasana!';
    viesti.style.color = 'red';
    return false;
  }
  else {
    viesti.innerHTML = 'Olet kirjautunut sisään onnistuneesti!'
    viesti.style.color = 'green';
    return false;
  }
}
