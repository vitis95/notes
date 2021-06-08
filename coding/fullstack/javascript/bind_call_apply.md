# Bind, Call and Apply

## Call
Permette di invocare una funzione impostando il primo parametro come oggetto di riferimento per this ed i parametri successivi, in numero variabile, come valori da passare alla funzione.
***
## Apply
Del tutto simile a call() con la differenza che prevede due soli parametri: il primo è l’oggetto da associare a this mentre il secondo parametro è un array dei valori da passare alla funzione da invocare.
***
## Bind
Un approccio alternativo all’utilizzo di call() e apply() per impostare correttamente l’oggetto this è l’uso del metodo bind(), introdotto nella versione 5 di ECMAScript.

A differenza di call() e apply() che impostano l’oggetto this e gli eventuali parametri al momento della chiamata della funzione, bind() consente di creare una nuova funzione con l’oggetto this preimpostato. La nuova funzione creata da bind() può essere invocata quindi in un secondo momento.
***

### Esempio

``` javascript
var john = {
  name: 'John',
  age: 26,
  jobb: 'teacher',
  presentation: function (style, timeOfDay) {
    if (style === 'formal') {
      console.log('Good ' + timeOfDay + ', Ladies and gentlemen! I\'m ' + this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old.');
    } else if (style === 'friendly') {
      console.log('Hey! What\'s up? I\'m ' + this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old. Have a nice ' + timeOfDay + '.');
    }
  }
}

var emily = {
  name: 'Emily',
  age: 35,
  job: 'designer'
};

john.presentation('formal', 'morning');

john.presentation.call(emily, 'friendly', 'afternoon'); // call ci permette di usare il metodo che si trova dentro john ma con l'oggetto emily

//john.presentation.apply(emily, ['friendly', 'afternoon']);

var johnFriendly = john.presentation.bind(john, 'friendly'); // bind restituisce una funzione che verrrà quindi memorizzata nella variabile johnFriendly

johnFriendly('morning');
johnFriendly('night');

var emilyFormal = john.presentation.bind(emily, 'formal');
emilyFormal('afternoon');

```