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
