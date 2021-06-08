# STASH

* git stash - accontona in memoria le modifiche non ancora committate
* git stash list - visualizza la lista di tutte le stash memorizzate
```
stash@{0}: WIP on master: 049d078 added the index file
stash@{1}: WIP on master: c264051 Revert "added file_size"
stash@{2}: WIP on master: 21d80a5 added number to log
```

* git stash apply "nomeStash" - recuperare le modifiche salvatate in memoria (nomeStash = statsh@{1})

### CASO D'USO: 

Ho un branch "IVAN" e un "master", ho delle modifiche nel branch IVAN che mi voglio portare su master senza committare e pushare perché magari ho bisogno prima di pullare la roba su master e poi di avere quelle modifiche, può quindi succedere quando ad esempio mi dimentico di pullare master e inizio a fare modifiche però su un altro branch. 