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