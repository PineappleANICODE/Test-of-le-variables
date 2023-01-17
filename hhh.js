var el = document.getElementById("showName");
el.addEventListener("click", formatName, false);

function formatName() {
  var NAME = document.getElementById('NAME').value;
  var AGE = document.getElementById('AGE').value;
  var RD = document.getElementById('RD').value;
  var POOP = document.getElementById('POOP').value;

  document.getElementById('fullName').innerHTML = "RAWR!! HELLO " + NAME + " UR " + AGE + " YEARS OLD!! " + RD +"---------------------" + POOP ;
}
