/*
var b = 104 
if (b > 104) { 
  b = (b / 104).toFixed(2) + 'MB';
 console.log('ciao', b)
}
*/
console.log('ciao')

function formatSize(size){
  console.log('entro')
   if (size>=1048576){
     console.log('entro2')
    size=(size/1048576).toFixed(2)+' MB';
    console.log('dddd', size)
    }
  return size;
  console.log('dddd', size)
}

formatSize(1048577);

