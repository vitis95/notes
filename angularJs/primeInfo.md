
+ Nasce per le single page application


<b>ng-app</b> - questo attributo rappresenta una direttiva AngularJS - è usato per contrassegnare un elemento HTML che angularJs considera come elemento ROOT dell'applicazione. Questo da la libertà agli sviluppatori di dire ad angularJs se l'intera pagina HTML o solo una parte di questa è trattata come un'applicazione AngularJs

## angular.js script tag:

``` js
<script src="lib/angular/angular.js"></script>
```
+ This code downloads the angular.js script which registers a callback that will be executed by the browser when the containing HTML page is fully downloaded. When the callback is executed, AngularJS looks for the ngApp directive.


## Ci sono 3 cose importanti che succedono durante la fase di bootstrap
1. L'injector che sarà usato per la dependency inection è creato
2. L'injector poi creerà il ROOT SCOPE che diventerà il contesto per il modello della tua applicazione 
3. Poi AngularJs compila il DOM partendo dall'elemento root ngApp, processando directives and bindings che trova. 

IMMAGINE ESPLICATIVA DELLA STRUTTURA - https://docs.angularjs.org/img/tutorial/tutorial_00.png

## STRUTTURA APPLICAZIONI
Ci sono diversi modi per struttura il codice di una applicazione. Questo tutorial (la guida ufficiale) incoraggia l'uso del design pattern MVC.

***

<b> ng-repeat </b> - è una direttiva ripetitore
Esempio: <li ng-repeat="phone in phones"> in questo per esempio dice di creare un elemento li per ogni phone 


## Controller
Il controler permette di stabilire un data-binding tra il model e la view

## Scope
Il concetto di scope in angular è cruciale, è una colla che permette al template, al model e al controller di lavorare insieme. 
+ any changes made to the model are reflected in the view
+ any changes that occur in the view are reflected in the model


## Componenti
combinazione template + controllor - è un pattern cosi frequente e ricorrente - angularJs fornisce un modo facile e conciso per combinarali insieme in entità riutilizzabili e isolate --> componenti 

### Creare un componente
.component() metodo di un modulo AngularJs

# 4. DIRECTORY E ORGANIZZAZIONE FILE 



## One Feature per File
We should put each feature / entity in its own file. Each standalone controller will be defined in its own file, each component will be defined in its own file ecc. 

# Utilizzo dei moduli
Vantaggio: utilizzo del codice non solo nella stessa applicazione ma anche tra le applicazioni. 
+ Mettere ogni entità nel proprio file
+ Oranizzare il codice per area caratteristica anzicché per funzione
+ Dividere il codice in moduli da cui possono dipendere altri moduli 


## Una caratteristica per file 
+ Dobbiamo mettere ogni caratteristica / eneità nel proprio file
+ Ogni controller autonomo verrà definito nel proprio file
+ Ciascun componente verrà definito nel proprio file ecc. 

## Organizzazione per caratteristica
+ Raggruppare i file in directory per funzionalità
+ Sezione dell'app che elenca i telefoni: mettiammo tutti i file correlati in una directory sotto --> phone-list/ app/ app/core/

## Utilizzo dei moduli 
+ Ogni caratteristica / sezione dovrebbe dichiarare il proprio modulo e tutte le entità docrrelate dovrebbero registrarsi su quel modulo

## STRUTTURA IN PAROLE POVERE

app / phone-list (raggruppa le funzionalità relative alla phone list, struttura html, componente tutto) / allo stesso livello di phone-list troviamo app.moduel.js e index.html

## 5. Filtering Repeaters
***
``` html
<div class="container-fluid">
  <div class="row">
    <div class="col-md-2">
      <!--Sidebar content-->

      Search: <input ng-model="$ctrl.query" /> <!-- la direttiva ng-model consente a un utente di inserire i criteri di ricerca e vedere immediatamente glie ffetti della loro ricerca nell'elenco telefonico - sostanzialmente viene associato il valore della casella alla variabile - nedi ng-reapeat-->

    </div>
    <div class="col-md-10">
      <!--Body content-->

      <ul class="phones">
        <li ng-repeat="phone in $ctrl.phones | filter:$ctrl.query"><!-- i valori di cui sopra, sono immediatamente disponibili alla direttiva ripetitore, l'uso del filtro (filter) poi utilizz il valore per creare un nuovo array che contiene solo quei record che corrispondono alla query. $ctrl.query --> 
          <span>{{phone.name}}</span>
          <p>{{phone.snippet}}</p>
        </li>
      </ul>

    </div>
  </div>
</div>
```

## 6. Two-way Data Binding 
``` html
<ul class="phones">
  <li ng-repeat="phone in $ctrl.phones | filter:$ctrl.query | orderBy:$ctrl.orderProp"> <!-- Più o meno stesso discorso di prima, in questo caso però la funzione è orderBy una funzione che ordine -->
    <span>{{phone.name}}</span>
    <p>{{phone.snippet}}</p>
  </li>
</ul>

<p>
  Sort by:
  <select ng-model="$ctrl.orderProp"> <!-- creiamo un ng-model sulla select e richiamiamo anche esso da <li> sulla directive ng-repeat -->
    <option value="name">Alphabetical</option>
    <option value="age">Newest</option>
  </select>
</p>
```
<b>orderBy</b> - è un fiiltro che accetta un array in input, lo copia e riordina la copia che viene poi restituita 

Questa cosa di collegare banalmente un ng-repeat e un ng-model è un data-binding

Ogni volta che qualcosa cambia, per esempio si agisce sul ng-model (quindi ogni volta che il modello cambia) - il data-biding di AngularJs (quindi l'associazione dati di AngularJs) farà si che la vista si aggiorni automaticamente



Ovviamente è stato modificato il model di phones cambiando l'array dei phones aggiungendo la proprietà age (1, 2, 3) e settando il valore di default di orderProp ad age - altrimenti l'orderBy rimarrebbe non inizializzato
``` js
controller: function PhoneListController() {
      this.phones = [
        {
          name: 'Nexus S',
          snippet: 'Fast just got faster with Nexus S.',
          age: 1
        }, {
          name: 'Motorola XOOM™ with Wi-Fi',
          snippet: 'The Next, Next Generation tablet.',
          age: 2
        }, {
          name: 'MOTOROLA XOOM™',
          snippet: 'The Next, Next Generation tablet.',
          age: 3
        }
      ];

      this.orderProp = 'age';
    }
```


## 7. Qua utilizziamo qualcosa per fare qualcosa e quel qualcosa non mi è chiaro per fare una cosa che non mi è chiara scopriamoloooooooo dependency injection questa sconosciuta simpaticamente abbreviata (DI)

## Component Controller

$http - tipo questo è un servizio - lo utilizziamo nel nostro controller per fare una richiesta HTTP al web server per andare a prendere i dati nel file app/phones/phones.json --> è solo uno dei numerosi servizi AngularJS integrati che gestiscono operazioni comuni nelle applicazioni web 

AngularJS - innietta questi servizi per te, proprio dove ne hai bisogno

FRASE PER IL MOMENTO POCO CHIARA MA CHE SEMBRA FONDAMENTALE: 
I servizi sono gestiti dal sottosistema DI di AngularJS. L'iniezione delle dipendenze aiuta a rendere le tue applicazioni web sia ben strutturate (ad esempio entità separate per la presentazione, i dati e il controllo) sia liberamente (le dipendenze tra entità non vengono risolte dalle entità stesse, ma dal sottosistema DI). Di conseguenza, anche le applicazioni sono più facili da testare.
