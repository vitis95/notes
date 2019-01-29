
+ Nasce per le single page application




# 0. Bootstrap 

``` html
<!doctype html>
<html lang="en" ng-app>
  <head>
    <meta charset="utf-8">
    <title>My HTML File</title>
    <link rel="stylesheet" href="lib/bootstrap/dist/css/bootstrap.css" />
    <script src="lib/angular/angular.js"></script>
  </head>
  <body>

    <p>Nothing here {{'yet' + '!'}}</p>

  </body>
</html>
```

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

### angular-seed 
+ È un progetto che viene in genere utilizzato per avviare nuovi progetti AngularJS 
+ È preconfigurato per installare il framework AngularJS e gli strumenti per sviluppare e testare una tipica applicazione web 
+ Il progetto phone-cat si basa su questo con alcune modifiche apportate

***

# 1. Static Template
***
app/index.html
<ul>
  <li>
    <span>Nexus S</span>
    <p>
      Fast just got faster with Nexus S.
    </p>
  </li>
  <li>
    <span>Motorola XOOM™ with Wi-Fi</span>
    <p>
      The Next, Next Generation tablet.
    </p>
  </li>
</ul>
***
Abbiamo semplicemente scritto codice html statico all'interno della index.html che rappresentano due telefoni cellulari. 

***

# 2. AngularJS Templates
--> Rendere dinamica la pagina Web con AngularJS

## STRUTTURA APPLICAZIONI
Ci sono diversi modi per struttura il codice di una applicazione. Questo tutorial (la guida ufficiale) incoraggia l'uso del design pattern MVC.

***
## View and Template 

+ In angularJS la vista è una proiezione del modello tramite il <b> modello </b> HTML
+ Quindi ogni volta che il modello cambia, AngularJS aggiorna i punti di binding appropriati, che aggiiornano la vissta 

***
app/index.html diventa cosi:
``` html
<html ng-app="phonecatApp">
<head>
  ...
  <script src="lib/angular/angular.js"></script>
  <script src="app.js"></script>
</head>
<body ng-controller="PhoneListController">

  <ul>
    <li ng-repeat="phone in phones">
      <span>{{phone.name}}</span>
      <p>{{phone.snippet}}</p>
    </li>
  </ul>

</body>
</html>
```
***

<b> ng-repeat </b> - è una direttiva ripetitore
Esempio: <li ng-repeat="phone in phones"> in questo per esempio dice di creare un elemento li per ogni phone 

?????????????????? dove prende i telefoni ???????????????????????

<body ng-controller="PhoneListController"> DIRETTIVA ng-controller collega il PhoneListController al body

## Controller
+ Il controler permette di stabilire un data-binding (associazione di dati) tra il model e la view
+ È semplicemente una funzione di costruzione che accetta un $scope parametro 
***
app/app.js:
```
// Define the `phonecatApp` module
var phonecatApp = angular.module('phonecatApp', []);

// Define the `PhoneListController` controller on the `phonecatApp` module
phonecatApp.controller('PhoneListController', function PhoneListController($scope) {
  $scope.phones = [
    {
      name: 'Nexus S',
      snippet: 'Fast just got faster with Nexus S.'
    }, {
      name: 'Motorola XOOM™ with Wi-Fi',
      snippet: 'The Next, Next Generation tablet.'
    }, {
      name: 'MOTOROLA XOOM™',
      snippet: 'The Next, Next Generation tablet.'
    }
  ];
});
```
***

+ Abbiamo dichiarato un controller chiamato PhoneListController e registrato in un modulo AngularJS phonecatApp


RAGIONAMENTO CRUCIALE: 
+ Abbiamo collegato i punti tra la presentazione, i dati e i componenti logici come segue:
  + la direttiva ngController, che si trova sul <body> tag, fa riferimento al nome del nostro controller PhoneListController che si trova in app.js
  + Il PhoneListController è il controller che collega i dati del telefono a quello $scope che è stato iniettato nella nostra funzione di controller.


## Scope
Il concetto di scope in angular è cruciale, è una colla che permette al template, al model e al controller di lavorare insieme. 
+ any changes made to the model are reflected in the view
+ any changes that occur in the view are reflected in the model

***

# 3. Componenti
combinazione template + controller - è un pattern cosi frequente e ricorrente - angularJs fornisce un modo facile e conciso per combinarali insieme in entità riutilizzabili e isolate --> componenti 

### Creare un componente
.component() metodo di un modulo AngularJs

# 4. DIRECTORY E ORGANIZZAZIONE FILE 
NON AGGINGIAMO FUNZIONALITÀ - FACCIAMO RIFATTORIZZIAMO IL NOSTRO PROGETTO

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

# 5. Filtering Repeaters
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

# 6. Two-way Data Binding 
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

+ Questa cosa di collegare banalmente un ng-repeat e un ng-model è un data-binding

+ Ogni volta che qualcosa cambia, per esempio si agisce sul ng-model (quindi ogni volta che il modello cambia) - il data-biding di AngularJs (quindi l'associazione dati di AngularJs) farà si che la vista si aggiorni automaticamente



+ Ovviamente è stato modificato il model di phones cambiando l'array dei phones aggiungendo la proprietà age (1, 2, 3) e settando il valore di default di orderProp ad age - altrimenti l'orderBy rimarrebbe non inizializzato

+ Impostando orderProp a "age" nel controller - il binding funziona nella direzione dal nostro modello all'interfaccia utente
+ Se si seleziona "alfabetico" nel menu a discesa, il modello verrà aggiornato e i telefoni verranno riordinati - data binding che fa il suo lavoro nella direzione opposta - dall'interfaccia utente al modello 


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


# 7. XHR e iniezione delle dipendenze

## Qua utilizziamo qualcosa per fare qualcosa e quel qualcosa non mi è chiaro per fare una cosa che non mi è chiara scopriamoloooooooo dependency injection questa sconosciuta simpaticamente abbreviata (DI)

+ Utilizzeremo la DI di AngularJS per fornire il servizio al phoneList controller del componente

## Component Controller

$http - tipo questo è un servizio - lo utilizziamo nel nostro controller per fare una richiesta HTTP al web server per andare a prendere i dati nel file app/phones/phones.json --> è solo uno dei numerosi servizi AngularJS integrati che gestiscono operazioni comuni nelle applicazioni web 

AngularJS - innietta questi servizi per te, proprio dove ne hai bisogno --> app/phones/phones.json

FRASE PER IL MOMENTO POCO CHIARA MA CHE SEMBRA FONDAMENTALE: 
I servizi sono gestiti dal sottosistema DI di AngularJS. L'iniezione delle dipendenze aiuta a rendere le tue applicazioni web sia ben strutturate (ad esempio entità separate per la presentazione, i dati e il controllo) sia liberamente (le dipendenze tra entità non vengono risolte dalle entità stesse, ma dal sottosistema DI). Di conseguenza, anche le applicazioni sono più facili da testare.


# 8. Templating Links & Images
+ Nel json dei dati dei phones c'è un id univoco e un link ad un'immagine, che punta alle immagini nella cartella app/img/phones

``` html
<ul class="phones">
  <li ng-repeat="phone in $ctrl.phones | filter:$ctrl.query | orderBy:$ctrl.orderProp" class="thumbnail">
    <a href="#!/phones/{{phone.id}}" class="thumb"> <!--  -->
      <img ng-src="{{phone.imageUrl}}" alt="{{phone.name}}" /> <!--  -->
    </a>
    <a href="#!/phones/{{phone.id}}">{{phone.name}}</a>
    <p>{{phone.snippet}}</p>
  </li>
</ul>
```

# 9. Routing & Multiple Views


+ <b>ngRoute<b> - modulo angularJs che ti permette di collegare le diverse viste di un'applicazione

+ per aggiungere la vista dettagliata, trasformeremo index.html in quello che chiamiamo layout template

+ i percorsi delle applcaioni in AngularJS sono dichiarati tramite $routeProvider, che è il fornitore del servizio $route

+ Questo servizio semplifica il collegamento di controller, modelli di visualizzazione e la posizione corrente dell'URL nel browser

+ Utilizzando questa funzionalità, possiamo implementare il deep linking, che ci consente di utilizzare la cronologia del browser

## A note about DI, Injector and Providers
+ La DI è il cuore di AngularJS
Come funziona?
+ Quando l'applicazione si avvia, AngularJS crea un iniettore che sarà usato per trovare e inniettare tutti i servizi che sono richiesti dall'applicazione
+ L'inniettore non sa cosa i servizi come $http o $route fanno

## L'inniettore esegue i seguenti passaggi:
+ Carica la definizione del modulo che hai specificato nella tua applicazione 
+ Registra tutti i provider definiti in queste definizioni di modulo 
+ Quando viene richiesto di farlo, istanzia pigramente i servizi e le loro dipendenze, tramite i loro provider, come parametri per una funzione iniettabile

<b> provider </b> - sono oggetti che si occupano di creare istanze ed esporre configurazioni API che possono essere usate per controllare la creazione e il comportamento in runtime di un servizio.

+ Per esempio: $routeProvider espone API che ti permetetono di definire le rotte della tua applicazione


## Template
+ Il servizio $route è di solito usato insieme alla direttiva ngView.
+ Il ruolo di questa direttiva è di includere the view template della rotta corrente nel layout template

<!doctype html>
<html lang="en" ng-app="phonecatApp">
  <head>
    <meta charset="utf-8">
    <title>Google Phone Gallery</title>
    <link rel="stylesheet" href="lib/bootstrap/dist/css/bootstrap.css" />
    <link rel="stylesheet" href="app.css" />
    <script src="lib/angular/angular.js"></script>
    <script src="lib/angular-route/angular-route.js"></script>
    <script src="app.module.js"></script>
    <script src="app.config.js"></script>
    <script src="phone-list/phone-list.module.js"></script>
    <script src="phone-list/phone-list.component.js"></script>
    <script src="phone-detail/phone-detail.module.js"></script>
    <script src="phone-detail/phone-detail.component.js"></script>
  </head>
  <body>

    <div ng-view></div>

  </body>
</html>

+ Questa è la index.html
+ Abbiamo aggiunto nuovi script:
  + angular-route.js - definisce il modulo ngRoute di angularJS che ci fornisce il routing
  + app.config.js - configura i provider disponibili per il nostro modulo princiale 
  + phone-detail.module.js - definisce un nuovo modulo che contiene il componente phoneDetail
  + phone-detail.component.js - definisice un componente fittizio phoneDetail


## Configurazione di un modulo 
+ il modulo .config() di un modulo ci consente di accedere ai provider disponibili per la configurazione
+ per rendere disponibili alla nostra applicazione i provider, i servizi e le direttive definiti in ngRoute, dobbiamo aggiungere ngRoute come dipendenza del nostro modulo phonecatApp

***
app.config.js
angular.
  module('phonecatApp').
  config(['$routeProvider',
    function config($routeProvider) {
      $routeProvider.
        when('/phones', {
          template: '<phone-list></phone-list>'
        }).
        when('/phones/:phoneId', {
          template: '<phone-detail></phone-detail>'
        }).
        otherwise('/phones');
    }
  ]);
+ usando il metodo .config() chiediamo ai fornitori necessari (ad esempio $routeProvider) di essere iniettati nella nostra funzione di configurazione e quindi di usare i loor metodi per specificare il comportamento dei servizi corrispondenti
+ qui utilizziamo i metodi $routeProvider.when() e $routeProvider.otherwise() per definire i notri percorsi di applicazione
***

# 10. More Templating
+ oltre a phone.json
+ la directory app/phones/ contiene anche un JSON per ogni telefono
+ ogni file di un telefono contiene le informazioni del telefono che andremo a visualizzare nella lista singola di un telefono

## Controller di componenti
+ Espanderemo il controller del componente phoneDetail utilizzndo il servizio $http per scawricare i file JSON appropriati
+ Funziona allo stesso modo del controller del componente PhoneList

***

phone-detail.component.js

// Register `phoneDetail` component, along with its associated controller and template
angular.
  module('phoneDetail').
  component('phoneDetail', {
    templateUrl: 'phone-detail/phone-detail.template.html',
    controller: ['$http', '$routeParams',
      function PhoneDetailController($http, $routeParams) {
        var self = this;

        $http.get('phones/' + $routeParams.phoneId + '.json').then(function(response) {
          self.phone = response.data;
        });
      }
    ]
  });

+ per costruire l'URL per la richiesta HTTP, usiamo $routeParams.phoneId, che viene estratto dal percorso corrente dal servizio $route

***


# Customo Filters

## Templates

***
index.html

<!doctype html>
<html lang="en" ng-app="phonecatApp">
  <head>
    <meta charset="utf-8">
    <title>Google Phone Gallery</title>
    <link rel="stylesheet" href="lib/bootstrap/dist/css/bootstrap.css" />
    <link rel="stylesheet" href="app.css" />
    <script src="lib/angular/angular.js"></script>
    <script src="lib/angular-route/angular-route.js"></script>
    <script src="app.module.js"></script>
    <script src="app.config.js"></script>
    <script src="core/core.module.js"></script> <!-- QUA -->
    <script src="core/checkmark/checkmark.filter.js"></script> <!-- QUA -->
    <script src="phone-list/phone-list.module.js"></script>
    <script src="phone-list/phone-list.component.js"></script>
    <script src="phone-detail/phone-detail.module.js"></script>
    <script src="phone-detail/phone-detail.component.js"></script>
  </head>
  <body>

    <div ng-view></div>

  </body>
</html>

+ Poiché abbiamo creato due nuovi file, dobbiamo includerli nel nostro modello di layout
***

La sintassi per usare i filtri in angularJs è la seguente:
```
{{expression | filter}}
```

+ Impieghiamo il filtro nel modello dei dettagli del telefono:
``` html
<dl>
  <dt>Infrared</dt>
  <dd>{{$ctrl.phone.connectivity.infrared | checkmark}}</dd>
  <dt>GPS</dt>
  <dd>{{$ctrl.phone.connectivity.gps | checkmark}}</dd>
</dl>
```

# 12. Event Handlers
Cl click di una thumbnail image la ingrandiamo a sinistra

## Component Controller
***
app/phone-detail/phone-detail.component.js:

angular.
  module('phoneDetail').
  component('phoneDetail', {
    templateUrl: 'phone-detail/phone-detail.template.html',
    controller: ['$http', '$routeParams',
      function PhoneDetailController($http, $routeParams) {
        var self = this;

        self.setImage = function setImage(imageUrl) {
          self.mainImageUrl = imageUrl;
        };

        $http.get('phones/' + $routeParams.phoneId + '.json').then(function(response) {
          self.phone = response.data;
          self.setImage(self.phone.images[0]);
        });
      }
    ]
  });

+ in questo componente controller, abbiamo creato la proprietà del modello mainImageUrl e impostato il suo valore predefinito sul primo URL dell'immagine del telefono  

+ Abbiamo anche creato un metodo setImage () (da utilizzare come gestore di eventi), che cambierà il valore di mainImageUrl.
***

## Component Template
***
app/phone-detail/phone-detail.template.html:
``` html
<ul class="phone-thumbs">
  <li ng-repeat="img in $ctrl.phone.images">
    <img ng-src="{{img}}" ng-click="$ctrl.setImage(img)" />
  </li>
</ul>
```
+ Abbiamo associato la direttiva ngSrc dell'immagine grande alla proprietà $ctrl.mainImageUrl
+ Abbiammo anche registrato un gestore ngClick sulle immagini in miniatura

***


# 13. REST and Custom Services
+ In questo passaggio cambieremo il modo in cui la nostra applicazione recupera i dati 
+ Definiamo un servizio personalizzato che rappresenta un client RESTful
+ Usando questo client possiamo fare richieste di dati al server in un modo più semplice, senza dover gestire l'API $http, i metodi HTTP e gli URL di livello inferiore

## Dipendenze 
+ La funzionalità RESTful è fornita da AngularJS nel modulo ngResource, che viene distribuito separatamente dal framework AngularJS principale.
+ Poiché stiamo utilizzando npm per installare le dipendene lato client, questo passaggio aggiorna il file di configurazione di package.json per includere la nuova dipendenza.
+ The new dependency "angular-resource": "1.7.x" tells npm to install a version of the angular-resource module that is compatible with version 1.7.x of AngularJS. We must tell npm to download and install this dependency.

## Service
+ Creiamo il nostro servizio per fornire l'accesso ai dati el telefono sul server. 
+ Inseriremo il servizio nel suo modulo, sotto core, in modo che possiamo dichiarare esplicitamente la sua dipendenza da ngResource

app/core/phone/phone.module.js:

```
angular.module('core.phone', ['ngResource']);
```

app/core/phone/phone.service.js:

```
angular.
  module('core.phone').
  factory('Phone', ['$resource',
    function($resource) {
      return $resource('phones/:phoneId.json', {}, {
        query: {
          method: 'GET',
          params: {phoneId: 'phones'},
          isArray: true
        }
      });
    }
  ]);
```

app/core/core.module.js:

```
angular.module('core', ['core.phone']);
```

## Template
+ il nostro servizio di risorse personalizzate verrà definito in app / core / phone / phone.service.js
+ quindi dobbiamo includere questo file e il file.module.js associat nel nostro modello di layout
+ inoltre, dobbiamo anche caricare il file angular-resource.js che contiene il modulo ngResource

app/index.html:

``` html
<head>
  ...
  <script src="lib/angular-resource/angular-resource.js"></script>
  ...
  <script src="core/phone/phone.module.js"></script>
  <script src="core/phone/phone.service.js"></script>
  ...
</head>
```

## Component Controllers
+ Ora possiamo semplificare i nostri controller di componenti (PhoneListController e PhoneDetailController) prendendo in considerazione il servizio $ http di livello inferiore, sostituendolo con il nuovo servizio telefonico. Il servizio risorse $ di AngularJS è più facile da utilizzare rispetto a $ http per l'interazione con le origini dati esposte come risorse RESTful. È anche più facile ora capire cosa sta facendo il codice nei nostri controllori.

app/phone-list/phone-list.module.js:

```
angular.module('phoneList', ['core.phone']);
```

app/phone-list/phone-list.component.js:
```
angular.
  module('phoneList').
  component('phoneList', {
    templateUrl: 'phone-list/phone-list.template.html',
    controller: ['Phone',
      function PhoneListController(Phone) {
        this.phones = Phone.query();
        this.orderProp = 'age';
      }
    ]
  });
```

app/phone-detail/phone-detail.module.js:

```
angular.module('phoneDetail', [
  'ngRoute',
  'core.phone'
]);
```

app/phone-detail/phone-detail.component.js:

```
angular.
  module('phoneDetail').
  component('phoneDetail', {
    templateUrl: 'phone-detail/phone-detail.template.html',
    controller: ['$routeParams', 'Phone',
      function PhoneDetailController($routeParams, Phone) {
        var self = this;
        self.phone = Phone.get({phoneId: $routeParams.phoneId}, function(phone) {
          self.setImage(phone.images[0]);
        });

        self.setImage = function setImage(imageUrl) {
          self.mainImageUrl = imageUrl;
        };
      }
    ]
  });
```

Notice how in PhoneListController we replaced:

```
$http.get('phones/phones.json').then(function(response) {
  self.phones = response.data;
});
```

with just

```
this.phones = Phone.query();
```


# 14. Animations
