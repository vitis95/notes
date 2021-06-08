<b>MVC</b> - all'intenro di questo pattern il CONTROLLER assolve il ruolo di creare un collegamento tra il MODEL (la fonte dei dati) e la VIEW (la presentazione) e cio è esattamente ciò che accade anche in angularJs

<b> MODELLO </b> - È la fonte dei dati - nel nosotro caso per esempio è una semplice serie di telefoni nella notazione letterale dell'oggetto
<b> VIEW </b> - È la presentazione 
<b> CONTROLLER </b> - assolve il ruolo di creare un collegamento tra il MODEL e la VIEW


## Moduli 
+ In linea generale favorisocno la seprazione dei compiti definendo un'interfaccia pubblica e limitando la visibilità del funzionamento interno. 
+ In angulr un modulo è un contenitore di componenti 
+ Creare un modulo:
``` js
angular.module("mioModulo", []);
```

+ Anche se il notro modulo non dipende da altri moduli, cioè non utilizza funzionalità definite in altri moduli, il secondo parametro deve essere comunque passato. Array vuoto
+ Se invece il nostro modulo dipende da altri moduli, possiamo indicarli con un array di stringhe che rappresentano i loro nomi: 
``` javascript
angular.module("mioModulo", ["modulo1", "modulo2", "modulo3"]);
```


DALLA DOCUMENTAZIONE 
+ Modello - HTML con markup aggiuntivo - i dati mostrati all'utente nella vista e con cui l'utente interagisce 
+ Direttive - estendere HTML con attributi ed elementi personalizzati
+ Scopo - contesto in cui il modello è archiviato in modo che controllori, direttive ed espressioni possano accedervi 
+ Espressioni - accedere a variabili e funzioni dell'ambito
+ Compiler - analizza il modello e crea un'istanza di direttive ed espressioni 
+ Filtro - formatta il valore di un'espressione per la visualizzazione all'utente
+ Vista - cosa vede l'utente (il DOM)
+ Associazione dati - sincronizzare i dati tra il modello e la vista 
+ Controller - la logica aziendale dietro le viste
+ Iniezione di dipendenza - crea e collega oggetti e funzioni
+ Iniettore - contenitore per iniezione di dipendenza
+ Modulo - un contenitore per le diverse parti di un'app inclusi i controller, serizi, filtri, direttive che configurano l'iniettore
+ Servizio - logica aziendale riutilizzabile indipendente dalle visualizzazioni




