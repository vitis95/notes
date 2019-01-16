# DOM Elements

## Trovare elementi HTML

Ci sono diversi modi per farlo come puoi immagginare 

Finding HTML elements by id
Finding HTML elements by tag name
Finding HTML elements by class name
Finding HTML elements by CSS selectors
Finding HTML elements by HTML object collections


ESEMPIO SOTTO: Se trova l'elemento, il metodo ritorna l'elemento come un oggetto in myElement altrimenti myElement conterrà null
``` javascript
var myElement = document.getElementById("intro");
```

ESEMPIO: in questo esempio cerca tutti gli elementi p
``` javascript
var x = document.getElementsByTagName("p");
```
ESEMPIO: cerca tutti gli elementi p dentro l'elemento main
``` js
var x = document.getElementById("main");
var y = x.getElementsByTagName("p");
```

Trova gli elementi html con la stessa classe
``` javascript
var x = document.getElementsByClassName("intro");
```

Se vuoi cercare tutti gli elementi html che corrispondono ad uno specifico selettore CSS
``` javascript
var x = document.querySelectorAll("p.intro");
```