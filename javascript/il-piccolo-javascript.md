# Il piccolo libro di Javscript

<b> Single Page Applicazion </b> 
+ App Web costruite con Js 
+ Un singolo file HTML 

<b> ES6 </b> - è la versione 2015 di js 

## TERMINI TECNICI

+ <b> API </b> - Advanced Programming Intervace - insieme di funzioni messe a disposizione del programmatore finale. 
+ <b> API NATIVE </b> - Tutte le funzionalità che sono disponibili senza bisogno di installare librerie aggiuntive 
+ <b> BROWSER API o WEB API </b> - i produttori dei vari browser mettono a disposizione una serie di funzioni che un qualsiasi web developer può sfruttare nel proprio codice. 
+ <b> ECMAscrpit </b> - sinonimo di js - nel 1996 js venne standardizzato e messo sotto l'ala protettiva di un comitato denominato ECMA
+ <b> ES5 </b> - versione 5 js
+ <b> ES6 </b> - versione 6 js - 2015 
+ <b> ES7 </b> - versione 7 js - 2016
+ <b> ES8 </b> - versione 8 js - 2017
+ <b> SPEC o SPECIFICA JS </b> - doc tenico su cui i produttori si basano per implementare i motori js nei browser
+ <b> Vanilla JavaScript </b> - è diventato un termine di uso comune per indicare codice
JavaScript “puro”, ovvero scritto senza l’ausilio di librerie esterne come jQuery, React ecc.

# FONDAMENTI DI JAVASCRIPT

<b> PRIMITIVE </b> - js si basa su 7 mattoncini fondamentali:
+ String
+ Number 
+ Boolean 
+ Null
+ Undefined 
+ Object 
+ Symbol

<b> OBJECT </b> - Una delle primitive più importanti - pilastro su cui si regge il linguaggio 
+ Gli oggetti sono contenitori di valori
+ Ogni valore può essere associato ad una chiave - <b> che prendono il nome di PROPRIETÀ dell'oggetto 

## LE FUNZIONI IN JS 

Le funzioni in js possono essere dichiarate in 2 modi:
+ <b> Named Function </b> - quando la funzione ha un nome 
``` js
function hello() {
    return "Hello";
}
```
+ <b> Anonymous Function </b> - quando la funzione è dichiarata senza un nome (deve essere necessariamente associata ad una variabile)
```js
var hello = function() {
    return "Hello";
}
```

Una funzione anonima può essere passata come valore all'interno di un'altra funzione (e non solo):
``` js
var hello = function() {
    return "Hello";
}

function helloHello(fn){
    return fn();
}

var result = helloHello(hello);

```


## DIFFERENZA METODI E FUNZIONI 
<b> FUNZIONE </b> - Blocco di codice riutilizzare e stand-alone, non legato a nessun altro oggetto:
```js
function hello(){
    return "Hello";
}
```

<b> METODO </b> - Funzione usata per operare su un dato oggetto: 
Vedi funzione anonima qui sotto usata in un oggetto
```js

var firstObj {
    name: "Ivan",
    age: "23",
    hello: function() {
        console.log("Hello " + this.name);
    }
};

firstObj.hello();

```

METODO - funzioni con la sintassi: nomeOggetto.metodoCheLaManipola()
toUpperCase ad esempio è un metodo dell'oggetto stringa hello:
'hello'.toUpperCase();


# VERSIONE ES6 - VERSIONE 6 - 2015

## ARROW FUCTIONS 

``` js

const myArrowFun = someParam => someParam + 1; 

```

+ Possiamo omettere il return
+ Se avessimo bisogno di operazioni come un if dobbiamo aggiungere le graffe con il blocco di codice 

``` js
const myNotSoSimpleArrowFun = someParam => {
    if (someParam === 0) {
        return "Nothing to do!";
    }
    return "Done";
};
```


### ARROW FUNCTIONS CON PIU PARAMETRI

``` js 
const myArrowFun = (someParam, someOtherParam) => someParam + someOtherParam;
```

### FUNCTION CON 0 PARAMETRI

``` js
const myArrowFun = () => 88;
```

## CLASSI FAKE IN ES6
```js 
class Person {
    constructor(name) {
        this.name = name;
    }
    greet() {
        console.log("Hello " + this.name);
    }
}
```

## DEFAULT PARAMETERS PER LE FUNZIONI

```js
function hello(string = "Hello ", name = "Default") {
    return string + name;
}
```
## TEMPLATE LITERALS
Concatenare variabili 
```js
function hello(string = "Hello", name = "default") {
    return `${string} ${name}`;
}
```

## 2 NUOVI MODI DI DICHIARARE LE VARIABILI

``` js

let supposedToBeChanged = "yes"; 

cosnt notSupposedToBeChanged = "yes";

```


## NUOVO LOOP FOR ... OF

``` js 
for (let element of [1, 2, 3, 4, 5]) {
    console.log(element);
}
```

## PROMISE
+ Rappresentazione di un evento futuro 

``` js 
const myPromise = newPromise(function(resolve, reject) {
    resolve({ name: "Alex", age: 33 });
});
```

+ creata la promise è possibile consumarla agganciando <u> then </u>. Anche <u> then </u> ha bisogno di una funzione. 

``` js
myPromise.then((data) => console.log(data))
```
che ritornerà:
``` js 
{ name: "Alex", age: 33 }
```


# COME FUNZIONANO I MOTORI JAVASCRIPT 

+ Google V8 --> Chrome
+ Spidermonkey --> Mozilla

<b> Motore Javascript </b> - entità inclusa all'interno del browser preposta a far girare il tuo codice js 

<b> JIT compilation (Just In Time) </b> - Javascript viene compilato dal motore alcuni microsecondi prima dell'esecuzione

## GLOBAL MEMORY NEI MOTORI JAVASCRIPT
<b> JIT compilation (Just In Time) </b> - Javascript viene compilato dal motore alcuni microsecondi prima dell'esecuzione
Per il momento però ci concentriamo sull'<b>esecuzione del codice</b>

### Consideriamo questo esempio:
```js
var num = 2;

function pow(num) {
    return num * num;
}

```

+ il motore js inizia ad eseguire il codice 
+ ogni istruzione viene "spezzettata" e memorizzata in una serie di box virtuali (STEP 1)
    + <b>Globabl memory</b>(memoria globale) - mantiene in memoria:
        + <b>variabili globali</b>
        + <b>dichiarazione delle funzioni</b>


### Cosa succede se chiamo la funzione pow ed ordino al motore di eseguirla?

```js
pow(num);
```
L'<b>esecuzione di una funzione js </b> innesca due ulteriori step:
1. <b>viene creato un Global Execution Context</b>
2. <b>la funzione pow viene spinta in una Call Stack</b>

![motori js](https://docs.google.com/drawings/d/e/2PACX-1vTleL4IMZU6jB3Qk6EVK99ON3jbq9likyQ-00gsWOF8NWbQ5Dde0erc6jMRwVnUAy-7r2jbuLDbosLm/pub?w=960&h=720)   


