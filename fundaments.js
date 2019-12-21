'use strict';
let printNumTwo;
for (let i = 0; i < 3; i++) {
  if (i === 2) {
    printNumTwo = function() {
      return i;
    };
  }
}
console.log(printNumTwo());


function checkScope() {

  let i = 'Function scope';
  if (true) {
   let i = 'block scope';
    console.log('Block scope i is: ', i);
  }
  console.log('Function scope i is: ', i);
  return i;
}
console.log(checkScope());

function printManyTimes(str) {

  const SENTENCE = str + " is cool!";
  for (let i = 0; i < str.length; i+=2) {
    console.log(SENTENCE);
  }

}
printManyTimes("Javascript");



const s = [5, 7, 2];
function editInPlace() {

    s[0] = 2;
    s[1] = 5;
    s[2] = 7;
}
editInPlace();
console.log(s);


//Objeto congelado


let obj = {
  name:"Javascript ES6",
  review:"Awesome"
};
Object.freeze(obj);
//obj.review = "bad";  Mutación no permitida
//obj.newProp = "Test";  Mutación no permitida
console.log(obj);


// Example freeze

function freezeObj() {

  const MATH_CONSTANTS = {
    PI: 3.14
  };
  Object.freeze(MATH_CONSTANTS);

  try {
    MATH_CONSTANTS.PI != 99;
  } catch(ex) {
    console.log(ex);
  }
  return MATH_CONSTANTS.PI;
}
const PI = freezeObj();

console.log(freezeObj());

// Funciones anónimas


const myFunc = () => "value";
console.log(myFunc());

const magic = () => new Date();
console.log(magic());


// Funcion paramteros

const doubler = item => item * 2;

const myConcat = (arr1, arr2) => {
  return arr1.concat(arr2);
};

console.log(myConcat([1, 2], [3, 4, 5]));