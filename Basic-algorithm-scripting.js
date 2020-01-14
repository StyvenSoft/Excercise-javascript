// Convert Celsius to Fahrenheit

function convertToF(celsius) {
  var fahrenheit = (celsius * (9 / 5)) + 32;
  return fahrenheit;
}

console.log(convertToF(30));
// exercise Reverse a String

function reverseString(str) {
  let x = str.length;
  let strReverse = '';
  while(x >= 0){
    strReverse = strReverse + str.charAt(x);
    x--;
  }
  return strReverse;
}

console.log(reverseString("Greetings from Earth"));

// option 2

function reverseStringSec(str) {
  for (var reversedStr = "", i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }
  return reversedStr;
}
console.log(reverseStringSec("Hello world"));

// factorizar un número

function factorialize(num) {

  if(num === 0){
    return 1;
  }
  return num * factorialize(num - 1);
}

console.log(factorialize(10));

// encontrar la palabra más larga en una cadena

function findLongestWordLength(str) {
  var words = str.split(' ');
  var maxLength = 0;

  for (var i = 0; i < words.length; i++) {
    if (words[i].length > maxLength) {
      maxLength = words[i].length;
    }
  }

  return maxLength;
  //return str.length;
}

let result = findLongestWordLength("What is the average airspeed velocity of an unladen swallow");

console.log(result);

// devuelve los números más grandes en matrices


function largestOfFour(arr) {
  return arr.map(function(group) {
    return group.reduce(function(prev, current) {
      return current > prev ? current : prev;
    });
  });
}

// confirmar el final de un string según un parametro dado

function confirmEnding(str, target) {

  return str.slice(str.length - target.length) === target;
}

confirmEnding("page is protected", "ed");

// Repetir una cadena dada str(primer argumento) por numveces (segundo argumento).

function repeatStringNumTimes(str, num) {

   return num > 0 ? str + repeatStringNumTimes(str, num - 1) : '';
}

console.log(repeatStringNumTimes("repeat", 4));

// Truncar o cortar una cadena (primer argumento) si es más larga que la longitud máxima de cadena dada

function truncateString(str, num) {
  let a = str.length;
  let b = str.slice(0,num);
  return (a > num) ? b + "..." : str;
}

let resutlT = truncateString("A-tisket a-tasket A green and yellow basket", 8);
console.log(resutlT);
