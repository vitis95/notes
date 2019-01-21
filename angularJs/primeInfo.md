
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


## One Feature per File
We should put each feature / entity in its own file. Each standalone controller will be defined in its own file, each component will be defined in its own file ecc. 