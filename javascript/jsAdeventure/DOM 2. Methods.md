#b  HTML DOM Methods
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