function contaCaratteri (name){
    var z = name.split('')
    return z.reverse();
    };
   var a = contaCaratteri('marco');          
   b = contaCaratteri('alessio');
    c = contaCaratteri('francesco');
   d = contaCaratteri('martina');
    console.log(a[0],b[0],c[0],d[0]);