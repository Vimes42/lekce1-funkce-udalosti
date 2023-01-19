// tady je místo pro náš program

function zmenBarvu(){
  let ctverecek = document.querySelector('.ctverecek');
  ctverecek.style.backgroundColor = "green";
}


/**
 * Sečte dvě čísla na vstupu a vrátí výsledek
 *
 * @param {int} a
 * @param {int} b
 */
function secti(a, b) {
  let c = a + b;
  return c;
}

function zobrazVysledek(){
  let vysledek = document.querySelector("#vysledek").innerHTML = secti(4, 5);
}


/**
 * Upozorní uživatele při spuštění.
 */
function upozorni() {
  alert("Gratulace, právě jsi spustila tuto funkci!");
  console.log("Gratulace, právě jsi spustila tuto funkci!");
  ctverecek = document.querySelector('.ctverecek');
  ctverecek.textContent = "Gratulace, právě jsi spustila tuto funkci!";
  ctverecek.style.width = "fit-content";
}
