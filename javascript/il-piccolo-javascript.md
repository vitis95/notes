# IL PICCOLO LIBRO DI JAVASCRIPT

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


--> ABBIAMO 2 NUOVI COMPONENTI DEL MOTORE JAVASCRIPT: <b>Global Execution
Context e Call Stack!</b>

## GLOBAL EXECUTION CONTEXT E CALL STACK
<b>Call Stack</b> - è uno STACK, ciò significa che il motore può aggiungere elementi solo dall'alto 
    + È il principale controllore dell'esecuzione del codice: ogni funciton call viene spinta all'interno del Call Stack 
    + Il Call Stack quindi è un registro temporaneo delle funzioni in attesa di essere eseguite 
    + Il Call Stack è un conceetto importante ed è il pilastro per capire che Javascript è ASINCRONO ma non bloccante
In javascript possiamo fare <b> una cosa per volta </b>    
    + Ogni funzione messa nel Call Stack deve aspettare il suo turno per essere eseguita

<b> Global Execution Context </b> - è un ambiente anch'esso globale, dove vengono memorizzate le informazioni relative alla funzione corrente. 
    + Tiene memoria del fatto che pow è una funzione e che da pow viene ritornato un valore 

### Cosa succede se la funzione gestisce altre variabili?
``` js
var num = 2;
function pow(num) {
    var fixed = 89;
    return num * num;
}

pow(2);
```

--> Il motore creerà un <b> Local Execution Context </b> per contentere fixed 
    + Nel grafico il rettangolo bianco verrà popolato da Local Execution Context

## RECAP SCHEMA DI FUNZIONAMENTO DI JS NEL BROWSER 
Quando eseguiamo una fuzione js il motore:
1. Popola la memoria globale (Global Memory) con variabili e dichiarazioni di funzioni
2. Crea un Global Execution Context dove vengono salvate le informazioni relative alla funzione corrente
3. La funzione da eseguire viene "spinta" nel Call Stack

+ Js è <b> single-threaded</b>
+ Esiste un solo <b> Call Stack </b> a disposizione del motore 
+ Quindi js può eseguire una sola funzione per volta 

### MANCA UN TASSELLO
Se aggiungessimo al nostro programma una nuova funzione che richiede molto tempo per terminare? bloccherebbe tutto il programma e quindi l'utente si ritroverebbe con la pagina bloccata senza possibilità di cliccare e scrollare - NON FUNZIONA COSI NELLA PROSSIMA SEZIONE SPIEGO IL TASSELLO CHE RISOLVE QUESTO PROBLEMA 

#### TIP
JavaScript è single-threaded ed i motori JavaScript hanno un singolo Call Stack a disposizione. I moderni browser però aggirano questa limitazione lanciando diversi thread di
esecuzione, ognuno con il proprio Call Stack. Questo fa pensare che le limitazioni del
linguaggio possano essere superate con questo “trucco” ma in realtà JavaScript rimane
asincrono e si comporta sempre come se ci fosse un unico Call Stack.


***


# JAVASCRIPT ASINCRONO, CALLBACK QUEUE ED EVENT LOOP

<b> Chiamata Sincrona </b> - il programma non può andare avanti fino a che non arriva la risposta dal server: la pagina web è bloccata fino all'arrivo della risposta
<b> Chiamata Asincrona </b> - una volta lanciata la funzione il programma può procedere. Quando poi arriverà la risposta del server verrà richiamata una funzione js nella pagina per gestirla 

In JS le funzione asincrone vengono fisicamente eliminate dal Call Stack e gestite da un "aiutante" che è quasi sempre il browser che mette a disposizione una serie di funzioni utili per gestire le operazioni verso il mondo esterno

#### REST API
Le REST API sono dei servizi web che espongono informazioni e dati. Questi dati possono
essere recuperati attraverso la rete con richieste HTTP. Un esempio di REST API è
jsonplaceholder.typicode.com⁶.


setTimeout per esempio non è un metoo nativo del linguaggio Js: fa parte delle browser API

``` js
setTimeout(callback, milliseconti)

setTimeout(callback, 1000)

function callback(){
    console.log('hello timer!')
}
```

#### BROWSER API
I produttori dei vari browser mettono a disposizione una serie di funzioni che un qualsiasi
web developer può sfruttare nel proprio codice. Esempi di browser API sono setTimeout,
setInterval, console.log. Un elenco completo e sempre aggiornato è disponibile su Web
APIs⁷.

--> IL MOTORE JS DELEGA AL BROWSER
Però la parte del motore che si occupa di gestire le funzioni in esecuzione è il Call Stack.
Quindi la funzione di callback dovrà finire in qualche modo di nuovo nel Call Stack per essere eeguita. 
Il Call Stack però può gestire <b> 1 sola funzione per volta </b>.
Requisito fondamentale per completare le nostre callback è che il <b> Call Back </b> sia vuoto e pronto per eseguire i nuovi lavori


#### CALLBACK 
Il termine callback in JavaScript non è niente di speciale. Si tratta di una convenzione per
indicare una funzione che verrà chiamata dopo un’operazione asincrona. Le funzioni di
callback non sono mai da sole. Generalmente vengono passate come parametro ad altre
funzioni asincrone, come in setTimeout: setTimeout(callback, millisecondi).

COME JS RISOLVE QUESTO PROBLEMA QUINDI?
Le callback asincrone finiscono all'interno di una CODA denominata <b> Callback Queue </b> 
    SCOPO: contenere le callback che attendono di essere eseguite 
Un altro componente denominato <b> Event Loop </b> è impegnato a controllare che il <b> Call Stack </b> sia vuoto e pronto per ricevere nuove funzioni. 

Non appena il Call Stack è libero l’Event Loop spinge dentro la prima callback in coda. Ed ecco
che le nostre funzioni asincrone spuntano fuori dopo un tot di secondi.

Global Memory, Execution Context e Call Stack spiegano il funzionamento sincrono di JavaScript.
Mentre Callback Queue ed Event Loop sono alla base di JavaScript asincrono.

## CALLBACK HELL E PROMISES 

#### RECAP:
- Quando lanciamo una funzione asincorna il motore passa il compito al browser. Dopo la lavorazione le funzioni di callback vengono prima spsotate nella <b> Callback Queue </b> e <b> l'Event Loop </b> si occupa di spingerle nel <b> Call Stack </b> quando quest'utlimo è libero da qualsiasi altra funzione. 
- <b> Callback </b> - funzioni che contengono operazioni asincrone e che vengono passate come parametro ad un'altra funzione. 


