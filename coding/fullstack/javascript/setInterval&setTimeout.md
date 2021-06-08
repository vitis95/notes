# setInterval & setTimeout
## cleanInterval & cleanTimeout

*****

<table>
<th>Metodo</th><th>Descrizione</th>
<tr><td>setInterval()</td><td>Esegue una funzione periodicamente in base ad un intervallo di tempo specificato</td></tr>
<tr><td>setTimeout()</td><td>Esegue una funzione dopo un certo numero di millisecondi</td></tr>
<tr><td>clearInterval()</td><td>Azzera un timer creato con setInterval()</td></tr>
<tr><td>clearTimeout()</td><td>Azzera un timer creato con setTimeout()</td></tr>
</table>


### setTimeout e clearTimeout

Facciamo qualche esempio per chiarire l’utilizzo di questi metodi. Consideriamo il seguente codice:

``` javascript
var myTimer = setTimeout(function() {console.log("test")}, 5000);
```
<p>
Il metodo setTimeout() crea un timer che eseguirà la funzione specificata come primo parametro dopo 5000 millisecondi. Il valore restituito dalla funzione è l’identificatore del timer appena creato.

Quello che otterremo è la visualizzazione della stringa test sulla console dopo cinque secondi.

Se intendiamo fermare l’esecuzione della funzione prima che venga eseguita dobbiamo utilizzare il metodo clearTimeout() come mostrato di seguito:
</p>

``` javascript
clearInterval(myTimer);
```

L’esecuzione programmata di una funzione con setTimeout() avviene una sola volta.

### setInterval e clearInterval

Per eseguire una funzione ad intervalli regolari facciamo ricorso a setInterval():

``` javascript
var x = 0;
var myTimer = setInterval(function() { x++; console.log(x); }, 1000);
```
Queste istruzioni visualizzeranno in sequenza i numeri interi ad intervalli di un secondo uno dall’altro. Per fermare il timer utilizzeremo clearInterval():

``` javascript
clearInterval(myTimer);
```