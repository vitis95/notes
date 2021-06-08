# Functions returning functions

Dal momento che una funzione è un oggetto è possibile restituirla come valore di ritorno dell’esecuzione di un’altra funzione.


``` javascript
function interviewQuestion(job){
  if(job === 'designer'){
    return function(name){ // funzone anonima
      console.log(name + ', can u pls explain what UX design is?');
    }
  }else if (job === 'teacher'){
    return function(name){
      console.log('What subject do u teach, ' + name + '?');
    }
  } else {
    return function(name){
      console.log('Hello, ' + name + 'what do you do?');
    }
  }
}

var teacherQuestion = interviewQuestion('teacher');
var designerQuestion = interviewQuestion('designer');

teacherQuestion('John');
designerQuestion('John');


interviewQuestion('teacher')('Mark'); // fare cosi è la stessa cosa 
```