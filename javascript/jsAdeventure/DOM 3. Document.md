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