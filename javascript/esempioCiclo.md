In questo caso specifico mi arriva una struct - che è una struttura simile ad un JSON (value.products)

Uso Object.keys - prende tutte le keys di questa struttura (quindi glo id)

Quindi con il forEach per ognuna di queste lancia una funzione function(product) - ad ogni ciclo ho un prodotto (product)

### Codice: 
``` javascript
let productsId = []
  Object.keys(value.products).forEach(function(product) {
    if(value.products[product] === true){
      productsId.push(JSON.stringify(product))
    }
  })
```
***
<b>Object.keys</b> - restituisce un array i quali elementi sono stringhe corrispondenti alle proprietà enumerabili trovate direttamente in obj. L'ordine delle proprietà è lo stesso di quello dato ciclando manualmente sulle proprietà dell'oggetto.
***
<b>push</b> - push inserisce un elemento dell'array all'inizio
***
<b>JSON.stringify</b> - converte in una stringa 


## CLAMOROSO
Non mandava su un array, per cui ho convertito in stringa l'intero array in questo modo: 

``` javascript
createPromotionLink(value, callback) {
      let productsId = []
      Object.keys(value.products).forEach(function(product) {
        if(value.products[product] === true){
          productsId.push(product)
        }
      })

      post({
        url: API_ECOMM_URL + '/promotionLinks',
        payload: {
          type: value.type,
          name: value.name,
          products: JSON.stringify(productsId)
        }
      }, (error, promotionLink) => {
        if (error) {
          callback(error)
        } else {
          callback(null, PromotionLink.adapt(promotionLink))
        }
      })
    },
```