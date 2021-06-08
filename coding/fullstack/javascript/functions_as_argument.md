# Passing functions as arguments

Le funzioni di un linguaggio di programmazione, come Javascript, consentono di passare come parametro non solo dei valori di tipo variabile o costante, ma anche altre funzioni che prenderanno il nome di funzioni di callback (in italiano funzioni di richiamo). Tali funzioni di callback, in genere (anche dato il nome "callback"), vengono eseguite dopo la routine principale, quindi al termine dell'esecuzione primaria lanciata dalla funzione chiamante.

Lo scopo delle funzioni di callback è quello di consentire a funzioni specifiche di svolgere comiti ulteriori a quelli loro propri, compiti che normalmente non sono noti al momento della scrittura del codice della funzione principale. In pratica si tratta di una tecnica (tipica della programmazione funzionale) grazie alla quale è possibile "espandere" le funzionalità predefinite di un blocco di codice, lasciando allo sviluppatore una maggiore libertà di sviluppo pur mantenendo un elevato grado di "riutilizzo" del codice sorgente.


``` javascript

var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {
  var arrRes = [];
  for (var i = 0; i < arr.length; i++) {
    arrRes.push(fn(arr[i]));
  }
  return arrRes;
}

function calculateAge(el) {
  return 2018 - el;
}

function isFullAge(el) {
  return el >= 18; // restituisce true o false
}

function maxHeartRate(el) {
  if (el >= 18 && el <= 81) {
    return Math.round(206.9 - (0.67 * el));
  } else {
    return -1;
  }

}

var ages = arrayCalc(years, calculateAge);  // non vogliamo chiamare una funzione ma voglia fare in modo che venga chiamata in seguito per cui non ci mettiamo ()
var fullAges = arrayCalc(ages, isFullAge)
var rates = arrayCalc(ages, maxHeartRate);

console.log(ages);
console.log(fullAges);
console.log(rates);

```