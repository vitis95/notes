## Crea una mappa - chiave prodotto e nome prodotto

``` javascript
getProductNameOptions = () => {
    let ret = {}
    map(this.props.revenuesProducts, (p) => {
      console.log('p1', p)
      ret[p.id] =  p.name
    })
    console.log('ret', ret)
    return ret
  }

  ```