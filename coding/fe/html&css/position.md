# Posizionamento elementi

Gli elementi appaiono nell'ordine con cui li abbiamo elencati (in base al flusso della pagina)

# Position - è una proprietà </br>
## Static - è il valore predefinito di position

    STATIC: Fa si che ciascun elemento venga visualizzato in base alla posizione che occupa all'interno del flusso della pagina / documento - comportamento di default di ciascun elemento di html - con static non posso usare le proprietà di offSet

 <b> Proprietà di offSet </b>    

    OFFSET: top, bottom, right, left

## Position relative 

    RELATIVE: non tiene conto della posizione degli altri elementi, se imposti un valore di offSet in modo da superare un altro elemento html lui lo fa senza problemi è una posizione relativa a seconda della posizione che dovrebbe assumere se fosse static 
  ES: top: 25px - sarà distante 25 px dall'alto rispetto alla posizione occupata se fosse stata static

## Position absolute 

    ABSOLUTE: L'elemento viene rimosso dal flusso della pagina, non occupa più il posto che occupava prima, viene rimpiazzato da altri elementi se ci sono - la sua dimensione è relativa al contenuto che contiene - si posiziona rispetto al suo immediato contenitore (potrebbe essere la finestra, se non ci sono contenitori)

## Position fixed
    FIXED: position: fixed - toglie l'elemento dal flusso della pagina - l'elemento diventa immune allo scroll della pagina intanto - possiamo sportarlo usando le proprietà di offSet
    L'elemento rimane fisso / inchiodado nella sua posizione - per questo è immune allo scroll
    
    
# Z-index
## Ordine di profondità di visualizzazione
    Nella situazione standard l'ordine di visualizzazione segue il flusso della pagina - 
    
https://www.google.it/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwj1rO38v7fcAhUDzqQKHbEPBEgQjRx6BAgBEAU&url=https%3A%2F%2Fzzz.buzz%2Fzh%2F2015%2F12%2F31%2Fwhat-you-may-not-know-about-the-z-index-property%2F&psig=AOvVaw3kpobm8HrtcSTBUDNPUyGO&ust=1532513492205736

    Automaticamente gli elementi si dispongono sull'asse z in base all'ordine con cui sono stati scritti nel codice 
    Lo z-index funziona solo se abbiamo impostato un posizionamento all'elemento
    Chi ha lo z-index nha priorità rispetto agli altri elementi che non hanno la proprietà z-index
    Chi ha valore maggiore compare sopra
    Quando due elementi della stessa pila hanno lo stesso z-indec prevale il discorso della regola classica (posizione nel flusso della pagina)
    
L'ordine di visualizzazione dato dallo z-index varia a seconda della pila in cui ci si trova e quindi aanche alla relazione che esiste tra gli elementi che fanno parte della stessa pila. 

Quando assegnamo uno z-index ad un elemento contenitore stiamo creando una nuova pila

Una pila può essere coontenuta in un'altra pila
<html> è la prima pila

        


    
