# GIT flow e versionamento semantico

+ GIt flow è un flusso di sviluppo 
+ Descrive un modello di diramazione (branching), ben preciso
+ Costruito intorno al concetto di release software

+ È concepito per sfruttare al meglio le potenzialità del software di versionamento GIT
+ Il flusso descritto in GIT flow è finalizzato a mantenere una storia implementativa pulita, dove un rilascio comunica a tutti gli utilizzatori la presenza di una <b> nuova versione </b> del prodotto

### Vantaggi: 
+ Tenere una storia pulita e leggibile 
    + faciliterà la vita a chi decide di usare il nostro software
    + poter concentrare e diversificare gli sforzi del team di sviluppo sulle particolari fasi: implementazione, correzione, pulizia, rilascio --> concnedendo a ciascuna di esse determinati spazi all'interno del repo e determinate tempistiche all'interno del flusso

***

+ Il punto di incotrno fra git e il versionamento semantico ha la sua chiave di volta nella creazione di tag appropriate sulle commit dei nosotri rami o tagging

## Branch storici
+ Questo modello di workflow prevede la presenza di ben due master branch:
    + <b> dev o develop </b> - utilizzato per lo sviluppo
    + <b> master </b> - per i rilasci ufficiali
+ Questi due branch assolvono il compito di "historical branch", cioè essi devono detenere la storia pulita del progetto, a prescindere dagli sviluppi di nuove feature e hotfiz, che altrimenti confluirebbero senza filtri sul ramo principale, rendendo meno comprensibile la storia del progetto e quindi più difficoltose le operazioni di reversione (revert) a stati precedenti.
## Branch di funzionalità
+ <b> feature branch </b> - aggiunge una nuova funzionalità (feature) al software
+ questi branch devono sempre essere derivati dal branch "develop" e rappresentano una "feature"
+ questo branch conterrà tutti i pezzi di storia, le commit, relative alla funzionalità implementata
+ Durante lo sviluppo di questi rami non è strettamente necessario mantenere una storia delle versioni pulite o usare particolari nomenclature per le varie commit (pratica che comunque potrebbe avere i suoi vantaggi come vedremo nell’ultimo paragrafo), in quanto prima di riportare il branch su develop, “appiattiremo” la storia del branch attraverso un’operazione di squash delle commit.
+ In questo modo la storia del branch di sviluppo risulterà pulita, con una sola commit, che conterrà solo l’informazione relativa all’aggiunta della nuova funzionalità.
+ Dopo averlo riportato su develop, è possibile rimuovere il feature branch dal repository:
```
$> git branch -D feat-nomedelfeaturebranch
```
+ in base alle dimensioni del team è possibile mantenere più feature branch contemporanemanete, a patto di riportarli correttamente e in tempi auspicabilmente brevi sul branch di sviluppo. Di norma un singolo sviluppatore si concentra sul rilascio di una feature per volta.

## Branch di rilascio 
+ Quando il ramo di sviluppo (develop) contiene abbastanza feature per un <b> rilascio </b> (o in base a qualsiasi tipo di scadenza prefissata), da questi viene derivto un nuovo branch detto di rilascio, o <b> release branch </b>
+ È buona norma distinguere questi rami con un nome significativo e consistente, ad esempio possono tutti iniziare con il prefisso “release-”.
+ A questo punto dello sviluppo non possono essere più aggiunte feature e le uniche aggiunte possibili possono essere quelle di bug fixing e documentazione.
+ Il team si concentrerà sull’obiettivo di riportare su master la prossima release quindi non verranno creati altri branch di funzionalità in quanto in questa fase l’obiettivo principale è quello di rilasciare.
+ Quando il ramo di rilascio sarà maturo e testato, a questo punto verrà eseguita l’operazione di merge sul branch “master”, contrassegnandola con un’opportuna tag, che ne indichi il versionamento.
+ Come per il feature branch, la storia completa dalla nascita alla maturazione di questo ramo dovrebbe essere trasparente per i branch storici, quindi anche qui andremo ad operare un’operazione di squash.
+ Anche durante il ciclo di vita di questi rami, è buona pratica usare nomenclature particolari per i tag delle commit, ma non indispensabile: vedremo questo concetto più avanti nell’ultimo paragrafo.
+ Allo stesso modo il branch di rilascio verrà eseguita indietro anche sul branch “develop”, tralasciando l’aggiunta dei tag di versione.
+ Una volta mergiato con i branch storici, il branch di release non ha più motivo di esistere e sarebbe opportuno cancellarlo.

## Branch di manutenzione 
+ Una migliore organizzazione dei rilasci non scongiura sicuramente l’occorrenza di problemi da risolvere con estrema urgenza. In questo caso, e solo in questo caso, è possibile derivare (avviare un fork) direttamente da master un branch di manutenzione, contenente la fix necessaria a risolvere il problema insorto.
+ È buona norma inoltre distinguere questi branch con un nome significativo e consistente, ad esempio possono tutti iniziare con il prefisso “hotfix-”.
+ Tale branch sarà ovviamente riportato su “master” il più presto possibile, ed in seguito anche su “develop” per mantenere la situazione dei due branch storici allineata.
+ Come nel caso dei branch di rilascio, qundo un branch di manutenzione viene riportato su master, il tag di master verrà contrassegnato appropriatamente.

## Versionamento semantico
+ Il versionamento semantico (semantic versioning) è un semplice schema di denominazione dei rilasci che ruota attorno a tre numeri: major, minor e patch.
+ Il formato prevede la concatenazione di questi tre numeri attraverso la notazione punto. Ad es: 1.1.2, indica major version: 1, minor version: 1 e patch: 2.
+ Riportato sullo schema prima descritto nel GIT flow, i tre numeri di versionamento saranno le tag dei branch.
+ In pratica:
    + Se abbiamo rilasciato una hotfix, che sostanzialmente non va ad intaccare le modalità di utilizzo del codice, dovremmo andare a incrementare il numero di <b> patch </b>
    + Se abbiamo implementato una modifica minore, spesso l'aggiunta di una feature che non pregiudica la retrocompatibilità del codice, andremo a incrementare il numero di <b> minor </b> versioning
    + Rilasci più consistenti che cambiano in maniera apprezzabile il funzionamento del codice andranno a incrementare il numero di <b> major </b> versioning 