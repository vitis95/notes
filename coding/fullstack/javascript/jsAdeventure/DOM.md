https://www.w3schools.com/js/js_htmldom.asp

# The HTML DOM (Document Object  Model)

+ Quando una web page carica, il browser crea un Documenti Object Model della pagina ovvero il DOM
+ è costruito come un albero di oggetti
+ questa è un'immagine: https://www.w3schools.com/js/pic_htmltree.gif


+ Con il modello a oggetti, JavaScript ottiene tutta la potenza di cui ha bisogno per creare HTML dinamico:
    JS:
    + può cambiare tutti gli elementi HTML nella pagina 
    + può cambiare tutti gli attributi HTML nella pagina
    + può cambiare tutti gli stili CSS nella pagina
    + può rimuovere elementi e attributi HTML esistenti
    + può aggiungere nuovi elementi e attributi HTML
    + può reagire agli eventi esistenti nella pagina
    + può creare nuovi eventi HTML nella pagina



DOM
+ Il DOM è uno standard W3C (World Wide Web Consortium)
+ definisce uno standard di accesso ai documenti

+ Il DOM è una piattaforma e un language-neutral interface che permette ai programmi e script di dinamicizzare accesso e update dei contenuti, della struttura e dello stile di un documento.

+ Il W3C DOM standard si divide in 3 parti:
    + Core DOM - modello standard per tutti i tipi di documenti
    + XML DOM - modello standard per documenti XML
    + HTML DOM - modello standard per documenti HTML


--> in poche parole: il DOM è uno standard per come prendere, cambiare, aggiungere o rimuovere eleenti HTML. 

#  HTML DOM Methods
 + <b> HTML DOM methods </b> - sono <b> azioni </b> che puoi eseguire sugli elementi HTML
 + <b> HTML DOM properties </b> sono <b> valori </b> degli elementi HTML che puoi impostare o modificare

 ## The DOM Programming Interface
 + E' possibile accedere al dom con javascript e questo era chiaro ( anche con altri linguaggi si può fare ma non ci interessa)
 + Nel dom tutti gli elementi HTML sono definiti come <b> objects </b> (oggetti)

 + The programming interface sono le proprietà e i metodi di ogni oggetto

 + Una <b> proprietà </b> è un valore che puoi ottenere o impostare (per esempio cambiando il contenuto di un elemento HTML)
 + Un <b> metodo </b> è un'azione che puoi fare (per esempio aggiungere o rimuovere un elemento HTML)


 ## Esempio di manipolazione del DOM
 ``` html
<html>
<body>

<p id="demo"></p>

<script>
document.getElementById("demo").innerHTML = "Hello World!";
</script>

</body>
</html>
 ```

 --> in questo esempio "getElementById" è un metodo e "innerHTML" è una proprietà

 ## getElementById METODO
 Il metodo più comunque per accedere ad un elemento HTML è l'uso degli "id" di un elemento

 ## innerHTML PROPRIETA'
 Il modo più facile per prendere contenuto da un elemento HTML

 # Javascript HTML DOM Document

+ L'oggetto DOM è il proprietario di tutti gli altri oggetti all'interno della pagina web 

+ Rappresenta la pagina web

+ Se vuoi accedere a qualunque elemento in una pagina HTML, deve sempre partire accedendo all'oggetto Documento

## Trovare elementi HTML

Metodi:
+ document.getElementById(id) - trova un elemento per elemento id
+ document.getElementsByTagName(name) - trova elementi dal tag name
+ document.getElementsByClassName(name) - trova elementi dalla class name

## Cambiare Elementi HTML

Metodi:
+ element.innerHTML = nuovo contenuto html - cambia l'interno di un elemento HTMML
+ element.attribute = nuovo valore - cambia il valore degli attributi di un elemento HTML
+ element.setAttribute(attribute, value) - cambia il valore dell'attributo di un elemento HTML
+ element.style.property = new style - cambia lo stile di un elemento HTML

## Aggiungere o eliminare elementi

Metodi:
+ document.createElememnt(element) - crea un elemento HTML
+ document.removeChild(element) - rimuove un elemento HTML
+ document.appendChild(element) -  aggiunge un elemento HTML
+ document.replaceChild(element) - copia un elemento HTML
+ document.write(text) - Scrive nel flusso di output HTML

## Adding Events Handlers 

Metodi: 
+ document.getElementById(id).onclick = function(){code} - Adding event handler code to an onclick event

## Finding HTML Objects
dai un'occhiata --> https://www.w3schools.com/js/js_htmldom_document.asp

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