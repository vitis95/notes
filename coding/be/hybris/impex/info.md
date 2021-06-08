## Intestazione impex
Ha la seguente struttura:
```
mode type[modifier=value];attribute[modifier=value];attribute[modifier=value];attribute[modifier=value][;...];attribute[modifier=value]
```
+ Mode - specifica cosa deve essere fatto (insert update ecc.)
+ Type - definisce il tipo di oggetto da elaborare (categoria, prodotto ecc)
+ Attribute - descrive a quale oggetto sono assegnate le colonne. Le righe valore forniscono i valori effettivi per gli elementi traddotti utilizzando le impostazioni dell'intestazione
+ Modifier - fornisce informazioni aggiuntive per la trduzione di un record di valori all'attributo di tipo mappato.
+ $ - macro


``` 
Categoria INSERT_UPDATE ; codice [ unique = true]; name [lang = de]; name [lang = it]; $ supercategories; $ thumbnail; description [lang = de]; ordine
```
 Questa intestazione afferma che ogni riga di valore seguente crea o aggiorna un'istanza di categoria, fino a quando non si verifica un'altra intestazione



 