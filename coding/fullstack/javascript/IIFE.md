# IIFE
## “Immediately Invoked Function Expression”
+ Un IIFE è una funzione anonima contenuta in una coppia di parentesi e viene richiamata immediatamente. 
+ La coppia di parentesi crea un ambito locale per tutto il codice al suo interno e rende la funzione anonima un'espressione di funzione.
***
### Tipico esempio:

``` javascript
(function() {
    // Your awesome code here
}());
```
### Alcuni le scrivono in questo modo

``` javascript
(function() {
    // Your awesome code here
})();
```
***
### Esempio:
``` javascript
function game(){
  var score = Math.random() * 10;
  console.log(score >= 5);
}

game();

(function () {
  var score = Math.random() * 10;
  console.log(score >= 5);
})();

console.log(store);


(function (goodLuck) {
  var score = Math.random() * 10;
  console.log(score >= 5 - goodLuck);
})(5);

```