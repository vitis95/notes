# Variables

``` less
@width: 10px;
@height: @width + 10px;

#header {
  width: @width;
  height: @height;
}
```

OUTPUTS: 

``` less
#header {
  width: 10px;
  height: 20px;
}
```

# Mixins
+ Sono un modo per includere un gruppo di proprietà da una serie di regole a un'altra serie di regole.
ESEMPIO:
``` less
.bordered {
  border-top: dotted 1px black;
  border-bottom: solid 2px black;
}
```
``` less
#menu a {
  color: #111;
  .bordered();
}

.post a {
  color: red;
  .bordered();
}
```

# Nesting (annidamento)
+ Ti da la possibilità di utilizzare una sintassi di annidamento
``` less
#header {
  color: black;
}
#header .navigation {
  font-size: 12px;
}
#header .logo {
  width: 300px;
}
```
``` less
#header {
  color: black;
  .navigation {
    font-size: 12px;
  }
  .logo {
    width: 300px;
  }
}
```

## AT rules
+ Le regole AT come @media o @support possono essere annidate come i selettori - quindi stesso discorso di prima è una sintassi che ti permette di annidare e quindi semplificare la scrittura del codice.
Ovvero scrivo così:
``` less
.component {
  width: 300px;
  @media (min-width: 768px) {
    width: 600px;
    @media  (min-resolution: 192dpi) {
      background-image: url(/img/retina2x.png);
    }
  }
  @media (min-width: 1280px) {
    width: 800px;
  }
}
```
Anzicché scrivere così:
``` less
.component {
  width: 300px;
}
@media (min-width: 768px) {
  .component {
    width: 600px;
  }
}
@media (min-width: 768px) and (min-resolution: 192dpi) {
  .component {
    background-image: url(/img/retina2x.png);
  }
}
@media (min-width: 1280px) {
  .component {
    width: 800px;
  }
}
```

OVVIAMENTE: il primo pezzo di codice da in output il secondo 

# Operations
+ Le operazioni aritmetiche possono operare su qualsiasi numero, colore o variabile.
ESEMPI:
``` less
// numbers are converted into the same units
@conversion-1: 5cm + 10mm; // result is 6cm
@conversion-2: 2 - 3cm - 5mm; // result is -1.5cm

// conversion is impossible
@incompatible-units: 2 + 5px - 3cm; // result is 4px

// example with variables
@base: 5%;
@filler: @base * 2; // result is 10%
@other: @base + @filler; // result is 15%
```

+ Moltiplicazioni e divisioni non convertono i numeri, nella maggior parte dei casi non avrebbe senso, moltiplicare due lunghezze per esempio darebbe l'area che i css non supportano
``` less
@base: 2cm * 3mm; // result is 6cm
```

# Escaping
+ Metti il pezzetto di codice in una variabile che ha un nome sensato e usi la variabile anzicché il pezzetto di codice SPIEGAZIONE BRUTALE GREZZA
ESEMPIO:
``` less
@min768: ~"(min-width: 768px)";
.element {
  @media @min768 {
    font-size: 1.2rem;
  }
}
```
risulta
``` less
@media (min-width: 768px) {
  .element {
    font-size: 1.2rem;
  }
}
```
A partire da Less 3.5 puoi semplicemente scrivere:
``` less
@min768: (min-width: 768px);
.element {
  @media @min768 {
    font-size: 1.2rem;
  }
}
```

# Functions
+ Usare le funzioni è abbastanza semplice
+ L'esempio seguente utilizza la percentuale per convertire da 0,5 a 50%, aumenta la ssaturazione di un colore di base del 5% e quindi imposta il colore di sfondo su uno che è alleggerito del 25% e filato di 8 gradi
``` less
@base: #f04615;
@width: 0.5;

.class {
  width: percentage(@width); // returns `50%`
  color: saturate(@base, 5%);
  background-color: spin(lighten(@base, 25%), 8);
}
```

# Namespaces and Accessors 
+ A volte potresti voler raggruppare i tuoi mixin, per scopi organizzativi, o solo per offrire qualche incapsulamento
``` less
#bundle() {
  .button {
    display: block;
    border: 1px solid black;
    background-color: grey;
    &:hover {
      background-color: white;
    }
  }
  .tab { ... }
  .citation { ... }
}
```
Ora se vogliamo mizare la classe .button nel nostro #header a, possiamo fare: 
``` less
#header a {
  color: orange;
  #bundle.button();  // can also be written as #bundle > .button
}
```

# Maps
+ A partire da Less 3.5, è anche possibile utilizzare mixins e ruleset come mappe di valori 
``` less
#colors() {
  primary: blue;
  secondary: green;
}

.button {
  color: #colors[primary];
  border: 1px solid #colors[secondary];
}
```
OUTPUT:
``` less
.button {
  color: blue;
  border: 1px solid green;
}
```

# Scope
+ È molto simile a quello dei css
+ Le variabili e i mixin vengono prima cercati localmente e, se non vengono trovati, vengono ereditati dall'ambito "genitore"

``` less
@var: red;

#page {
  @var: white;
  #header {
    color: @var; // white
  }
}

```
+ Come le proprietà personalizzate CSS, le definizioni di mixin e variabili non devono essere posizionate prima di una riga in cui sono referenziate. Quindi il seguente codice Less è identico all'esempio precedente:
``` less
@var: red;

#page {
  #header {
    color: @var; // white
  }
  @var: white;
}
```

# Comments
``` less
/* One heck of a block
 * style comment! */
@var: red;

// Get in line!
@var: white;
```

# Importing
+ È possibile importare un file .less e tutte le variabili in esso disponibili saranno disponibili.