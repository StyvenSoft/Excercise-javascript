//  matriz unidimensional

let simpleArray = ['one', 2, 'three', true, false, undefined, null];
console.log(simpleArray.length);
// logs 7 conteo array

let yourArray = ['animals', 'Objects', 'Fruts', 53, 58, false, true]

// matriz multidimensional

let complexArray = [
  [
    {
      one: 1,
      two: 2
    },
    {
      three: 3,
      four: 4
    }
  ],
  [
    {
      a: "a",
      b: "b"
    },
    {
      c: "c",
      d: "d"
    }
  ]
];

console.log(complexArray);

// acceder a matriz con notación de corchetes

let ourArray = ["a", "b", "c"];
let ourVariable = ourArray[0];
ourArray[1] = "not b anymore";

let myArray = ["a", "b", "c", "d"];
myArray[1] = "Other b";

console.log(myArray);

// Agregue elementos a una matriz Unidimensional

let twentyThree = 'XXIII';
let romanNumerals = ['XXI', 'XXII'];

// Array.unshift()
// agrega elementos al principio

romanNumerals.unshift('XIX', 'XX');

// método Array.push()
// agrega elementos al final de una matriz
romanNumerals.push(twentyThree);

console.log(romanNumerals);

// Example function agregar elements
function mixedNumbers(arr) {

  arr.unshift('I', 2, 'three');
  arr.push(7, 'VIII', 9);

  return arr;
}

console.log(mixedNumbers(['IV', 5, 'six']));

// eliminar elementos de una matriz

let greetings = ['whats up?', 'hello', 'see ya!'];
console.log(greetings);

//pop() elimina un elemento del final de una matriz
greetings.pop();


// shift()elimina un elemento desde el principio.
greetings.shift();

console.log(greetings);

// Example function delete elements

function popShift(arr) {
  let popped = arr.pop(); // Asignación de ultimo elemento
  let shifted = arr.shift(); // Asignación de primer elemento
  return [shifted, popped];
}

console.log(popShift(['challenge', 'is', 'not', 'complete']));

// eliminar elementos mediante splice()
// elimina cualquier número de elementos consecutivos de cualquier parte de una matriz

let array = ['today', 'was', 'not', 'so', 'great'];

array.splice(2, 2);

console.log(array);

let arrayLetters = ['I', 'am', 'feeling', 'really', 'happy'];

let newArray = arrayLetters.splice(3, 2);

console.log(newArray);

// Example sum 10
const arrSum = [2, 4, 5, 1, 7, 5, 2, 1];

arrSum.shift();
arrSum.splice(3, 4);

console.log(arrSum);

// agregar elementos mediante splice()

const numbers = [10, 11, 12, 12, 15];
const startIndex = 3; // Indice en el que comenzar a eliminar elementos
const amountToDelete = 1; // número de elementos que se eliminarán

numbers.splice(startIndex, amountToDelete, 13, 14);
// se elimina la segunda entrada de 12, y agregamos 13 y 14 en el mismo índice
console.log(numbers);

function htmlColorNames(arr) {
  arr.splice(0,2, 'DarkSalmon','BlanchedAlmond');
  return arr;
}

// do not change code below this line
console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurqoise', 'FireBrick']));


// Método slice()
// copias o extrae , un número dado de elementos a una nueva matriz

let weatherConditions = ['rain', 'snow', 'sleet', 'hail', 'clear'];

let todaysWeather = weatherConditions.slice(1, 3);

console.log(weatherConditions);
console.log(todaysWeather);


function forecast(arr) {

  return arr.slice(2, 4);
}

console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));

// operador Spread "..."
// el operador de propagación nos permite copiar fácilmente todos los elementos de una matriz, en orden

let thisArray = [true, true, undefined, false, null];
let thatArray = [...thisArray];

// Example copia la cadena arr según el argumento num
function copyMachine(arr, num) {
  let newArr = [];
  while (num >= 1) {
      newArr.push([...arr]);
    num--;
  }
  return newArr;
}

console.log(copyMachine([true, false, true], 2));

// combinar matrices con el operador de propagación "..."
let thisArraywords = ['sage', 'rosemary', 'parsley', 'thyme'];

let thatArraywords = ['basil', 'cilantro', ...thisArraywords, 'coriander'];

console.log(thatArraywords);

// Example

function spreadOut() {
  let fragment = ['to', 'code'];
  let sentence = ['learning', ...fragment, 'is', 'fun'];
  return sentence;
}

console.log(spreadOut());


// Verificar elementos de una matriz con indexOf()

let fruits = ['apples', 'pears', 'oranges', 'peaches', 'pears'];

fruits.indexOf('dates'); // returns -1
fruits.indexOf('oranges'); // returns 2
fruits.indexOf('pears'); // returns 1

// example function para verificar la presencia de un elemento en una matriz

function quickCheck(arr, elem) {
  if(arr.indexOf(elem) !== -1){
    return true
  }
  return false;
}

console.log(quickCheck(['squash', 'onions', 'shallots'], 'onions'));

// iterar a través de todos los elementos de una matriz utilizando bucles "For"

// Example
// funcion para buscar qué elementos de datos son mayores que 10

function greaterThanTen(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 10) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

console.log(greaterThanTen([2, 12, 8, 14, 80, 0, 1]));

// Compruela si el parametro elem se encuentra detro de una matriz anidada
// sino se encuentra devuelve en un nuevo array

function filteredArray(arr, elem) {
  let newArr = [];

  for(let i = 0; i < arr.length; i++){
    if (arr[i].indexOf(elem) == -1) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

console.log(filteredArray([[10, 8, 3], [14, 6, 23], [3, 18, 6]], 18));
