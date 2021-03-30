var arvattava = Math.floor(Math.random()*10)+1; //arpoo luvun 1-10 väliltä
var kerrat = 0;

window.onload= function alustapeli()
{
  var alustus = "";

  alert(arvattava);
  for(var i = 1; i <=10; i++)
  {
    for(var j = 0; j < 3; j++)
    {
      alustus += '<button class= "nayta" type="button" name="' + i +'" onclick="arvaaluku(this)" value = '+i+'>'+i+'</button>';
      if(i < 10 && j != 2)
      {
        i++;
      }
      else {
        j=3;
      }

    }
    alustus+= "<br>";
  }
  document.getElementById("tekstiboxi").innerHTML = alustus;

}
function arvaaluku(arpa)
{
  kerrat++;
  var arvaus = arpa.value;
  if(kerrat <= 3)
  {
    if(arvaus < arvattava)
    {
      alert("Valitsit liian pienen numeron");
      var x = "";
      for(var luvut = 1; luvut < arvaus; luvut++)
      {
        x = document.getElementsByName("" + luvut+ "");
        console.log(x);
        x.style.nayta = "none";
      }
    }
    else if(arvaus > arvattava)
    {
      alert("Valitsit liian suuren numeron");
    }
    else if (arvaus == arvattava)
    {
      alert("Oikein, käytit " + kerrat + " kertaa");
    }
    else
    {
      alert("Käytit kaikki kertasi");
    }
  }

}
