#### Creare un branch per una nuova feature (funzionalità)
##### Comando GIT
```
git checkout develop
git checkout -b feature/nuova_funzione
```

##### Comando GIT Flow 
```git flow feature start nuova_funzione ```

![[Pasted image 20211025171853.png]]


Una volta finito di sviluppare la nuova funzionalità possiamo mergare il branche feature dentro il branche develop

##### Comando GIT
```
git checkout develop
git merge feature/nuova_funzione
```
##### Comando GIT Flow
```
git flow feature finish feature/nuova_funzione
```

![[Pasted image 20211025172054.png]]


Prima di fare il merge possiamo pushare il branch e tenerlo li quanto ci pare, condividerlo con altri colleghi ecc. Pushare pullare ecc. una volta finito pushiamo, facciamo il merge e possiamo anche cancellare il branch da locale. 