# Closures

Una “chiusura” (closure) è quello che una funzione è capace di ricordare del contesto (lexical scope) dalla quale proviene, anche se viene eseguita al di fuori di esso.

***

``` javascript
function retirement(retirementAge) {
  var a = ' years left until retirement'
  return function (yearOfBirth) {
    var age = 2018 - yearOfBirth;
    console.log((retirementAge - age) + a);
  }
}

var retirementUS = retirement(66);
var retirementGermany = retirement(65);
retirementUS(1990);
retirementGermany(1990);



//retirement(66)(1990);


function interviewQuestion(job) {
  if (job === 'designer') {
    return function (name) { // funzone anonima
      console.log(name + ', can u pls explain what UX design is?');
    }
  } else if (job === 'teacher') {
    return function (name) {
      console.log('What subject do u teach, ' + name + '?');
    }
  } else {
    return function (name) {
      console.log('Hello, ' + name + 'what do you do?');
    }
  }
}


function interviewQuestion(job) {
  return function (name) {
    if (job === 'designer') {
      console.log(name + ', can u pls explain what UX design is?');
    } else if (job === 'teacher') {
      console.log('What subject do u teach, ' + name + '?');
    } else {
      console.log('Hello, ' + name + 'what do you do?');
    }
  }
}

interviewQuestion('teacher')('John');
```