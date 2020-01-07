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

