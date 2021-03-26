function tarkistaLomake(form) {
  //määritellään muuttujat
  var nimi = form.nimi.value;
  var salasana = form.salasana.value;
  var koneenKayttaja = form.radio;
  var mielipide = form.box;
  var lempiaine = form.aineet;
  var palaute = form.palaute.value;
  //tarkistetaan, ettei nimikenttä ole tyhjä
  if (nimi == "") {
    alert("Täytä nimikenttä!");
    form.nimi.focus();
    return false;
  } //tarkistetaan, ettei salasana ole alle 8 merkkiä
  if (salasana.length < 8) {
    alert("Anna vähintään kahdeksan merkkinen salasana!");
    form.salasana.focus();
    return false;
  } //tarkistetaan, ettei kehitysideakenttä ole tyhjä
  if (palaute == "") {
    alert("Ole hyvä ja anna jokin kehitysidea sivulle!");
    form.palaute.focus();
    return false;
  } //tarkistetaan, että radio buttoneista jokin on valittu
    //käymällä läpi kaikki vaihtoehdot
  var valinta = false;
  for (var i = 0; i < koneenKayttaja.length; i++) {
    if(koneenKayttaja[i].checked == true) {
      valinta = true;
    }
  }
  if (valinta == false) {
    alert("Kerro minkälainen koneen käyttäjä olet!");
    return false;
  } //tarkistetaan samaan tapaan, että jokin mielipide on valittu
  var tulos = false;
  for (var x = 0; x < mielipide.length; x++) {
    if(mielipide[x].checked == true) {
      tulos = true;
    }
  }
if (tulos == false) {
  alert("Kerro mitä mieltä olet tästä nettisivusta!");
  return false;
} //tarkistetaan, että lempiaine on valittu
if(lempiaine == "0") {
  alert("Valitse, mikä on lempiaineesi Keudassa!");
  return false;
} else {
  alert("Kiitos lomakkeen täytöstä!");
}
}
