Un programma viene sviluppato scrivendo il codice sorgente in un opportuno linguaggio definito, appunto, dalla sintassi del linguaggio stesso. La differenza tra compilazione ed interpretazione è molto importante ed influisce sia sulle prestazioni che sulle possibilità del linguaggio stesso.

Linguaggi come il C, C++, Delphi, Visual Basic sono linguaggi compilati e seguono questi passi: si scrive il codice in un editor, al più utilizzando un ambiente di sviluppo IDE che ne facilita la creazione, questo codice viene poi controllato per verificare che non ci siano errori e poi viene compilato, ovvero ogni istruzione viene trasformata nel corrispondente codice in linguaggio macchina che può essere, così, eseguito dal processore; questi sono i linguaggi compilati che vengono detti anche linguaggi imperativi, ed hanno il vantaggio di prestazioni migliori.

I linguaggi interpretati, invece, seguono una strada diversa, il codice sorgente viene, appunto, interpretato al volo e vengono, quindi, eseguite le istruzioni così come descritte nel codice sorgente; un esempio su tutti è il PHP il cui codice viene “elaborato” e restituisce una pagina html pura. La potenza di questo genere di linguaggi è, di fatto, l’alta portabilità e l’immediatezza tra quello che scriviamo e quello che viene presentato all’esecuzione del programma, ma rimangono dei problemi come la ricerca di errori nel codice sorgente o il carico di lavoro maggiore per il processore (che ogni volta deve elaborare la pagina).

Un linguaggio che è a metà strada tra queste metodologie è Java che è sia compilato che interpretato; il codice sorgente viene compilato in un formato intermedio (chiamato bytecode), il quale a sua volta viene interpretato dalla Java Virtual Machine (JVM), che ha il compito di interpretare “al volo” le istruzioni bytecode in istruzioni per il processore; la JVM viene sviluppata per ogni Sistema Operativo e permette di astrarre la macchina virtuale creata dal SO ad un livello di standardizzazione superiore (data di fatto dalla creazione della virtual machine sopra un’altra virtual machine) che rende, in pratica, JAVA altamente portabile.

Questa metodologia implica la possibilità di controllare eventuali errori del codice sorgente (grazie alla compilazione), di creare programmi relativamente leggeri (il bytecode è un formato che crea file di dimensioni ragionevoli), ma ha la pecca di avere delle prestazioni non proprio soddisfacenti, questo perché il codice viene interpretato dalla JVM che a sua volta deve delegare l’esecuzione vera e propria al Sistema Operativo.