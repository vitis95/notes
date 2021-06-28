
// Named Function
function nameFunction1() {
    console.log("ciao");
    return alert("Ciao!");
};

nameFunction1();



function saluta(){
    alert("Ciao!");
}
saluta();

function addizione(x, y){
    return x + y;
}
addizione(5, 6);

// Anonymous Function
var hello = function() {
    return "Ciao!";
}


// Metodo 
var primoOggetto = {
    name: "Ivan",
    age: "25",
    hello: function (){
        console.log("Hello " + this.name);
    }
};

primoOggetto.hello();


// Arrow Function 
const myArrowFun = someParam => someParam + 1;

const myArrowFun2 = someParam => {
    if (somePAram === 0) {
        return "Niente da fare!";
    }
    return "Done";
}
console.log(myArrowFun());

// Arrow Function con più parametri
const myArrowFun3 = (someParam, someOtherParam) => someParam + someOtherParam;

// Arrow Function con 0 parametri 
const myArrowFun4 = () => 88;
console.log(myArrowFun4());


// Classi Fake in Es6
class Person{
    constructor(name) {
        this.name = name;
    }
    greet() {
        console.log("Hello " + this.name);
    }
} 

// Default Parameters 
function hello2(string = "Hello ", name = "Default") {
    return string + name; 
}
hello2();
document.write(hello2());


// Template Literals
function hello3(string = "Hello3", name="default3") {
    return `${string} ${name}`;
}
console.log(hello3());


// Nuovo modo per dichiarare variabili 
let variabile1 = "variabile uno";
const variabile2 = "varibaile due";


// Nuovo loop for ... of 
for (let element of [1, 2, 3, 4, 5]){
    console.log(element);
} 




// Parametri funzioni e callback
// Parametri passati per valore
console.log("Inizio parametri funzioni e callback")
let num = 10;
function prima(x){
    x = x - 5; 
    console.log(x);
}

prima(num);
console.log(num);
    // passare i parametri per valore vuol dire che il valore della varibiale non cambia e lo vediamo in questo esempio
console.log("Fine parametri funzioni e callback")

// Operatore rest 
    // l'operatore rest deve essere l'ultimo argomento inserito
console.log("Inizio Operatore rest")
function operatoreRest(x, ...y){
    console.log(Array.isArray(y));
    console.log(x);
    console.log(y);
}
console.log(operatoreRest(10, 20, 30, 40));
console.log("Fine Operatore rest")


// Funzione con argomento già valorizzato
function seconda (x = 10){
    // codice
}
seconda(); // posso invocare la funzione senza passare nulla



// Callback --> sono funzioni passate come parametri - viene usata per codice che lavora in maniera asincrona, dati che mi vengono inviati dal serve, posso creare una funzione che si connette al server richiede questi dati, js lavora in maniera asincrona, finché aspetta i dati al ritorno dal server, può eseguire altre operazioni, quando arrivano i dati js comincia a mangiarli, cioè lavora in maniera asincrona. 
function callbackTest (x){
    return x * x;
}
console.log(callbackTest(10));
console.log(callbackTest); // in questo modo non invoco la funzione ma passo il codice della funzione come parametro. 

function principale (x, funCallback){
    console.log('Valore di x: ', x);
}

principale(5, callbackTest); // qui non sto invocando la callback ma la sto solo passando dato che è senza parentesi, poi dentro la parentesi invoco la function











// Promise
    // Rappresentazione di un evento futuro
const promise = new Promise(function(resolve, reject) {
    if (2 > 0){
        resolve({ name: "Alex", age: 33 });
    } else {
        alert("Reject");
    }
    
});

    // La promise si consuma agganciando then.

promise.then((data) => console.log(data));













