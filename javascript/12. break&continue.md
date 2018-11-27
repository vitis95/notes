# Break e continue

Vediamo come i comandi <b> break e continue </b> possono essere usati con i ciclu for e while.

## Cicli infiniti
### Esempio

``` javascript 
while(true) {
	// istruzioni
}
```

## Interrompere un ciclo: break

Questo comando interrompe un blocco di istruzioni e forza l'engine ad eseguire la prima istruzine che segue il blocco contenente il break. (se engina ti suona nuovo cerca engine javascript)

### Esempio
``` javascript 
var x=0;
while (true) {
	console.log(x);
	// condizione di uscita
	if (x > 100) break;
    x++;
}
```

## Continue
Questo comando invce serve per interrompere l'esecuzione della singola iterazione, saltando le istruzizoni che seguono per riprendere da capo il blocco di istruzioni, all'iterazione succissiva
### Esempio
``` javascript 
var x = 0;
while (x < 10) {
	x++;
	if (x > 3) continue;
	// se x è maggiore di 3, questa istruzione non viene più eseguita
	console.log(x);
}
```