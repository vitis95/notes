# CAPITOLO 4: Le basi del design e dello sviluppo Web Search Engine friendly

## Contenuto indicizzabile 

Per essere elencati nei risultati dei motori di ricerca i tuoi contenuti devono essere in formato testuale HTML. Altri contenuti non testuali sono virtualmente invisibili ai crawler dei motori di ricerca.

+ Il modo più semplice per assicurarsi che parole e frasi presentate ai tuoi utenti siano anche visibili ai motori di ricerca consiste nell'inserirle nel testo HTM della pagina.

+ Sono tuttavia disponibili metodi più avanzati per coloro che hanno bisogno di una formattazione più accattivante o stili di presentazione visuali:
1. Alle immagini in formato gif,jpg, o png possono essere assegnati in HTML degli “attributi alt”, che forniscono ai motori di ricerca una descrizione testuale del contenuto visivo.
2. Le immagini possono anche essere mostrate ai visitatori come sostituti del testo usando i fogli di stile CSS.
3. I contenuti inseriti in Flash o plug-in Java possono essere ripetuti in formato testuale nella pagina.
4. I contenuti audio & video dovrebbero essere accompagnati da una trascrizione testuale se si vuole che vengano indicizzati dai motori.

Per verificare quali elementi dei tuoi contenuti sono visibli e indicizzabili dai motori di ricerca esistono vari strumenti:
+ Google's cache
+ SEO-browser.com
+ mozBar
+ Yellowpipe

Se sei curioso di sapere esattamente quali parole e frasi i motori possono vedere su una pagina web, abbiamo un tool sfizioso chiamato:
+ Term Extractor
che elenca parole e frasi ordinate per frequenza


## Struttura di link esplorabile dal crawler
Struttura che permetta agli spider di muoversi attraverso i percorsi del sito al fine di trovare tutte le pagine di un sito

## Anatomia di un link
<a href="http://www.jonwye.com">Jon Wye's Custom Designed Belts</a>

<a - inizio di un link
http ecc. - link referral location
Jon ecc. - visible / anchor text of link
</a> - closure of link tag

--> Questo è un link semplice e comprensibile per i motori di ricerca.

+ I moduli online possono includere dei semplici menù a cascata o possono essere particolarmente articolati come questionari complessi. In ognuno dei due casi i motori di ricerca non possono completare i moduli ed in questo modo qualsiasi contenuto o link accessibile solo a valle della compilazione di un modulo risulta invisibile ai motori.

+ Se usi i Javascript per i link, potresti scoprire o che i motori non riescono a leggere questi link o che danno loro poco peso. I link standard HTML dovrebbero sostituire il Javascript (o accompagnarlo) su qualsiasi pagina che vuoi che venga letta dai motori.

+ I Tag Meta Robot ed il file Robots.txt (descritti qui) possono entrambi permettere al proprietario di un sito di restringere l’accesso ad una pagina. Fai attenzione al fatto che molti webmaster hanno utilizzato involontariamente questi strumenti nel tentativo di bloccare l’accesso a bot maligni, per poi scoprire che anche i motori di ricerca avevano smesso di visitarli.

+ Tecnicamente sia i link in frame che I-frame sono letti dai motori, ma entrambi presentano problemi strutturali per i motori in termini di organizzazione e possibilità di essere seguiti. A meno che tu non sia un utente esperto con le conoscenze giuste per capire come i motori di ricerca indicizzano e seguono i link nei frame, é meglio starne alla larga.

+ Sebbene questo punto sia strettamente legato al precedente sui moduli online, é un problema cosi diffuso che vale la pena parlarne. Gli spider non proveranno a fare ricerche per trovare i contenuti e proprio per questo si stima che milioni di pagine siano nascoste dietro muri inaccessibili, destinate all’anonimato fino a che una pagina accessibile dai motori non avrà un link a queste ultime.

+ I link all’interno del sito esempio sui Panda giocolieri (di cui abbiamo parlato sopra), sono una perfetta illustrazione di questo problema. Sebbene dozzine di Panda siano elencati e linkati dalla home page del sito, nessuno spider può raggiungerli attraverso l’architettura del sito, rendendoli di fatto invisibili ai motori (e quindi non recuperabili come risultati dai motori in caso di ricerche).

+ I motori tendono a leggere solo circa 100 link per ogni pagina. Questo limite é necessario per ridurre lo spam e preservare la qualità dei posizionamenti.



+ Rel=”nofollow” può essere utilizzato con la seguente sintassi:

<a href=http://www.seomoz.org rel="nofollow">Lousy Punks!</a>

I link possono avere molti attributi, ma i motori li ignorano quai tutti, con l’importante eccezione del tag rel=”nofollow”. Nell’esempio sopra, aggiungendo l’attributo rel=nofollow al link, abbiamo detto ai motori di ricerca che noi, i proprietari del sito, non vogliamo che questo link sia interpretato come un normale “voto editoriale”. Il Nofollow é stato introdotto come metodo per aiutare a bloccare i commenti automatici nei blog, nei guestbook e in generale per combattere lo spam generato dall’inserimento di link, ma si é modificato nel tempo in un modo per dire ai motori di ricerca di “scontare” qualsiasi valore il link avrebbe normalmente trasferito. Puoi leggere di più su questo tema e sul PageRank sculpting in questo post (http://www.seomoz.org/blog/google-says-yes-you-can-still-sculpt-pagerank-no-you-cant-do-it-with-nofollow)


+ Le parole chiave sono fondamentali nel processo di ricerca — sono le fondamenta della lingua e della ricerca. In effetti, l’intera scienza relativa al recupero delle informazioni (inclusi i motori di ricerca web-based come Google) si basa sulle parole chiave. Poiché i motori leggono e indicizzano i contenuti delle pagine nel web, tengono traccia di quelle pagine in indici basati su parole chiave. In questo modo, invece di archiviare 25 miliardi di pagine web in un database (che diventerebbe piuttosto grande), i motori hanno milioni e milioni di database più piccoli, ognuno focalizzato su una particolare parola chiave o frase. Ciò aiuta i motori a rendere molto più veloce il recupero dei dati di cui hanno bisogno in una frazione di secondo.

+ Ovviamente, se vuoi avere delle possibilità che la tua pagina compaia tra i risultati di ricerca se uno cerca “cane”, é estremamente importante assicurarsi che la parola “cane” faccia parte del contenuto indicizzabile della tua pagina.

+ Quando la ricerca viene effettuata, il motore sa quali pagine recuperare in base alle parole inserite nel box di ricerca. Altri dati come l’ordine delle parole, l’ortografia, i segni di punteggiatura, l’uso di lettere maiuscole forniscono ulteriori informazioni che i motori possono utilizzare per cercare le pagine giuste e ordinarle propriamente.

+ Per ovvie ragioni i motori di ricerca misurano i modi in cui le parole chiave sono utilizzate nelle pagine per determinare la rilevanza di un particolare documento rispetto alla ricerca effettuata. Uno dei modi migliori per “ottimizzare” il posizionamento di una pagina consiste perciò nell’assicurarsi che le parole chiave siano ben in vista nei titoli, nel testo e nei meta dati.

## Il mito della densità di parole chiave
+ La densità di parole chiave, senza ombra di dubbio, NON costituisce un componente dei moderni algoritmi dei motori di ricerca per il semplice fatto che fornisce risultati peggiori di molti e più avanzati metodi di analisi delle parole chiave.

+ La nozione dell’importanza della densità di parole chiave é nata prima dei motori di ricerca commerciali e di Internet e può essere difficilmente considerato un concetto applicabile al recupero delle informazioni. Quel che é peggio é che la densità di parole chiave non svolge alcun ruolo nel processo utilizzato dai motori di ricerca per analizzare i testi, indicizzare i documenti o assegnare un peso ai termini.

--> La conclusione: la densità delle parole chiave é indipendente dal contenuto, dalla qualità dalla semantica e dalla rilevanza.

E' ossibile comunque adottare efficacemente alcune pratiche di utilizzo delle parole chiave per migliorare l’ottimizzazione delle pagine:
+ Usa la parola chiave nel tag title almeno una volta e possibilmente due volte (o come variazione) se ha senso e suona bene (questo é soggettivo ma necessario). Cerca di mantenere la parola chiave più vicino possibile all’inizio del tag title. Ulteriori dettagli sui tag title sono illustrati successivamente nel capitolo.
+ Inserisci la parola chiave una volta nel tag header H1 della pagina.
+ Almeno 3 volte nel corpo della pagina (all’occorrenza anche qualche volta in più se c’è molto contenuto testuale. Potresti anche trovare un ulteriore beneficio nell’aggiungere la parola chiave più di 3 volte, ma nella nostra esperienza, aggiungere altre volte la parola o la frase tende ad avere un impatto minimo o nullo sul posizionamento.
+ Almeno una volta in grassetto. Puoi usare sia il tag <strong> sia il tag <b>, visto che i motori li considerano equivalenti.
+ Almeno una volta nell’attributo alt di un’immagine nella pagina. Questo non solo aiuta con la ricerca web, ma anche con la ricerca per immagini che può occasionalmente portare del traffico di valore.
+ Una volta nella URL. Ulteriori regole per le URL e le parole chiave sono discusse in seguito in questa sezione.
+ Almeno una volta (e qualche volta 2 quando ha senso) nel tag meta description. Da notare che il tag meta description non é utilizzato dai motori per il posizionamento, ma piuttosto aiuta ad attrarre click dalla pagina dei risultati di ricerca (visto che é il riassunto di testo utilizzato dai motori di ricerca nella presentazione dei risultati).
+ Generalmente non nell’anchor text di un link sulla stessa pagina che punta ad altre pagine sul tuo sito o a diversi domini (questo é un po’ complesso — vedi questo post sul blog per dettagli (http://www.seomoz.org/blog/how-to-solve-keyword-cannibalization)

## I tag title
+ appare in cima al browser ma sembra che gli utenti prestino poca attenzione a questa parte dello schermo, rendendola meno improtante delle 3 di seguito
+ fa in modo che i motori di ricerca evidenzioni in grassetto quei termini nei risutlati quando un utente ha effettuato una ricerca utilizzando quelle parole
+ migliora il posizionamento sui motori e ce lo dicono i guru della SEO

L'elemento tag title di una pagine dovrebbe essere una descrizionec concisa e puntuale del contenuto della pagina. Crea valore in tre specifiche aree ed è critica sia per l'esperienza utente sia per l'ottimizzazione sui motori

Seguire le migliori prassi per la creazione dei tag title consente di cogliere facilmente lato SEO delle enromi opportunità.


### Attenzione alla lunghezza
+ Il numero massimo di caratteri visualizzabile nei risultati delle ricerche per i tag title è 70 

### Metti le parole chiave importanti all'inizio
+ Tanto più vicino all'inizio del tag title metti le parole chiave, tanto più facile sarà posizionarsi nei motori e avere più probabilità che gli utenti clicchino sul tuo link nei risultati di ricerca (almeno secondo i test e l’esperienza di SEOmoz).

### Fai leva sul branding
+ A noi di SEOmoz piace inserire all’inizio di ogni tag title il brand (es. il nome del sito), poiché questo aiuta ad aumentare la conoscenza del marchio e a migliorare il click-through per le persone che conoscono e amano il brand. 
+ Molte agenzie SEO consigliano invece di utilizzare il nome del brand alla fine del tag title e ci sono volte in cui questo approcio è effettivamente piu efficace — pensa a cosa è importante per il tuo sito (ed i clienti del tuo sito) e a quanto è forte il tuo brand.

### Pensa alla leggicilità e all'impatto emotivo
+ Creare un tag title convincente aiuta ad attrarre più visite dai risultati di ricerca e può aiutare i visitatore a spendere del tempo sul tuo sito. Cosi è importante non solo pensare all’ottimizzazione e all’uso delle parole chiave, ma a tutta l’esperienza utente.
+ Il tag tigle è il primo elemento con cui il visitatore interagisce con il tuo marchio e dovrebbe trasmettere il più possibile un’impressione positiva.

### I Meta tag
In origine i meta tag erano stati pensati per fornire una proxy informativa sul contenuto del sito. Ognuno dei meta tag di base é elencato di seguito con una descrizione sul loro uso.

#### META ROBOTS
Possono essere usati per controllare l'attività dello spider dei motori di ricerca a livello di pagina. Ci sono diversi modi per utilizzare i meta robots per controllare come i motori trattano una pagina:
+ Index/NoIndex dice ai motori se la pagina deve essere letta e archiviata nell'inice. Se usi l'opzione "noindex" la pagina sarà esclusa dall'indice dei motori. Normalmente i motori assumono che tutte le pagine siano indicizzabili, quindi usare il valore "index" di norma non serve.
+ Follow/NoFollow dice ai motori se i link all'interno della pagina devono essere letti. Se scegli di usare "nofollow", i motori nonc onsidereranno i link sulla pagina ne per esplorare il sito ne per il calcolo del posizonalmento. Di reogla si assume che tutte le paginee abbiano l'attributo "follow"
+ Noarchive è usato per impedire ai motori di ricerca di salvare una copia cache della pagina. Di regola i motori conservano copie visibili di tutte le pagine che indicizzano che risultano accessibili attraversi i link "copia cache" nei risultati di ricerca.
+ Nosnippet dice ai otori di astenersi dal presentare un blocco di testo descrittivo vicino al titolo della pagina e all’URL nei risultati di ricerca.
+ NoODP é un tag specifico che dice ai motori di non recuperare una sintesi descrittiva della pagina dall’Open Directory Project (DMOZ) nella visualizzazione della pagina nei risultati delle ricerche
+ NoYDir, come NoODP, é specifico per Yahoo!, e dice al motore di non usare nei risultati delle ricerche la descrizione della pagina/sito disponibile sulla Yahoo! Directory.

#### META DESCRIPTION
+ Il tag meta description fornisce una breve descrizione del contenuto della pagina. I motori di ricerca non usano le parole chiave o le frasi presenti in questo tag per definire il posizionamento dei risultati. Le meta description sono però la principale fonte utilizzata dai motori per generare la sintesi testuale riportata sotto ciascun risultato.

+ Il tag meta description ha la funzione del “copy” di una pubblicità, attira i lettori verso il tuo sito dai risultati di ricerca ed é una componente estremamente importante del search marketing. Scrivere una descrizione leggibile e convincente usando le più importanti parole chiave (considera che Google evidenzia in neretto le parole chiave cercate nella descrizione) può aumentare in modo significativo il tasso di click through sui risultati verso le tue pagine.

+ Le Meta description possono avere qualsiasi lunghezza, ma i motori normalmente estraggono una sintesi non più lunga di 160 caratteri (come nell’esempio del Balboa Park qui a destra), cosi è generalmente raccomandabile attenersi ai giusti limiti.

### Altri meta tago poco importanti
#### Meta Keywords
+ I tag meta keywords una volta avevano importanza, ma non hanno più valore ai fini dell’ottimizzazione sui motori. Per saperne di più sulla storia di questo metag e sul perché sia caduto in disuso, leggete Meta Keywords Tag 101 su SearchEngineLand.

#### Meta refresh, meta revisit-after, meta content type, ecc.
+ Sebbene questi tag possano essere utilizzati con finalità SEO, sono meno critici nel processo, perciò vi rimandiamo a John Mueller di Google Webmaster Central per maggiori dettagli — Meta Tags & Web Search.

## Struttura delle URL
+ Le URL, gli indirizzi web di un documento particoalre, sono di enorme valore dal punto di vista della ricerca. Appaiono in molti punti critici

## Linee guida per la costruzione di URL
### Usa l'empatia
+ Mettiti nei panni di un utente e guarda la tua URL. Se puoi prevedere in modo facile e preciso il contenuto che ti aspetti di trovare sulla pagina, allora le tue URL sono scritte bene. Non serve spiegare ogni singolo dettaglio di una URL, ma averne un'idea di massima è un buon punto di partenza. 