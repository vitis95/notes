# Primitives VS Objects

+ I tipi di dato primitivi, come numeri e stringhe, sono tipi semplici il cui valore viene direttamente assegnato ad una variabile. Quindi in questo caso la variabile contiene effettivamente il valore assegnatole.
+ Gli oggetti sono strutture complesse e l’assegnamento di un oggetto ad una variabile non fa in modo che la variabile contenga effettivamente l’oggetto. Essa contiene in realtà un riferimento all’oggetto.

## Primitives
### Qui stiamo creando effettivamente una copia:

``` javascript
var a = 23;
var b = a;
a = 46;
console.log(a);
console.log(b);
```


## Objects
### Con gli oggetti non creiamo una copia ma un riferimento allo stesso oggetto:

``` javascript
var obj1 = {
  name: 'John',
  age: 26
};

var obj2 = obj1;
obj1.age = 30;
console.log(obj1.age);
console.log(obj2.age);
``` 


## Functions
``` javascript

var age = 27;
var obj = {
  name: 'Jonas',
  city: 'Lisbon'
};

function change(a ,b) {
  a = 30;
  b.city = 'San Franciso';
}

change(age, obj)

console.log(age);
console.log(obj.city);
``` 
