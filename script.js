function inflationCalculator() {
  let inflationRate = document.querySelector("#inflationRate");
  let money = document.querySelector("#money");

  //parseFloat sluzi za pretvaranje stringa u broj sa zarezom;
  inflationRate = parseFloat(inflationRate.value);
  money = parseFloat(money.value);

  let years = document.querySelector("#years").value;

  years = parseFloat(years);

  //formula za izracunavanje inflacije za prvu godinu
  let worth = money + money * (inflationRate / 100);
  console.log(worth);

  //formula za izracunavanje inflacije za ostale godine... i = brojcanik... pise se 1 umesto 0 zato sto smo vec izracunali inflaciju za jednu godinu!
  for (let i = 1; i < years; i++) {
    worth += worth * (inflationRate / 100);
  }

  //smanjimo broj na dve decimale;
  worth = worth.toFixed(2);

  console.log(worth);
  //dodajemo novi elemnt 'div' u nas web i konzolu
  let newElement = document.createElement("div");
  //dajemo mu klasu
  newElement.className = "new-walue";
  //dodajemo tekst na kraju
  newElement.innerText = `Danasnjih ${money}e vredi isto kao ${worth}e za ${years} godina.`;

  //na kraju container-a dodajemo tekst pomocu APPENDCHILD-a.
  document.querySelector(".container").appendChild(newElement);
}
