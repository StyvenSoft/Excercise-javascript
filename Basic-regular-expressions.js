let testStr = "Hello, my name is Kevin.";
let testRegex = /Kevin/;
testRegex.test(testStr);

let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
let waldoRegex = /Waldo/; 
let resultW = waldoRegex.test(waldoIsHiding);
console.log(`Palabra encontrada ${waldoRegex}`);


let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/;
let resultP = petRegex.test(petString);
console.log(resultP);

//Ignora mayusculas y minusculas "i"

let myString = "autodidact";
let fccRegex = /AutoDidacT/i; 
let resultM = fccRegex.test(myString);
console.log(`Comparación ${myString} es equivalente a ${fccRegex}`);

let hello = "Hello, World!".match(/Hello/);
// Returns ["Hello"]
let ourStr = "Regular expressions";
let ourRegex = /expressions/;
let resultO = ourStr.match(ourRegex);
console.log(hello, resultO);

let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/; 
let resultE = extractStr.match(codingRegex); // Change this line

console.log(resultE);

// buscar o extraer un patrón más de una vez "g"

let testStrRepeat = "Repeat, Repeat, Repeat";
let repeatRegex = /Repeat/g;
let resultT = testStrRepeat.match(repeatRegex);
console.log(resultT);

let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /Twinkle/gi; 
let resultTw = twinkleStar.match(starRegex); 
console.log(resultTw);

// unir cualquier cosa con el período comodín "."

let humStr = "I'll hum a song";
let hugStr = "Bear hug";
let huRegex = /hu./;
huRegex.test(humStr); 
huRegex.test(hugStr);

let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/; 
let result = unRegex.test(exampleStr);

// Multiples posibilidades "[]"

let bigStr = "big";
let bagStr = "bag";
let bugStr = "bug";
let bogStr = "bog";
let bgRegex = /b[aiu]g/;
bigStr.match(bgRegex); // Returns ["big"]
bagStr.match(bgRegex); // Returns ["bag"]
bugStr.match(bgRegex); // Returns ["bug"]
bogStr.match(bgRegex); // Returns null

//  clase de caracteres para extraer las vocales "/[]/"

let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/gi; // Expresion regular
let resultQ = quoteSample.match(vowelRegex);
console.log(resultQ);

// definir un rango de caracteres "[-]"

let catStr = "cat";
let batStr = "bat";
let matStr = "mat";
let bgRegexTwo = /[a-e]at/;
catStr.match(bgRegexTwo); // Returns ["cat"]
batStr.match(bgRegexTwo); // Returns ["bat"]
matStr.match(bgRegexTwo); // Returns null

let quoteSampleG = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-u]/gi; // Change this line
let resultquoteG = quoteSample.match(alphabetRegex);
console.log(resultquoteG);

/*
/-----Explicación del Código userCheck ----/
^ - inicio de entrada negacion
[a-z] - el primer caracter es una letra
[0-9][0-9]+ - termina con dos o más números
| - Significa ó
[a-z]+ - tiene una o más letras al lado
\d* - y termina con cero o más números
$ - busca al final de entrada
i - ignorar caso de entrada
*/

let username = "JackOfAllTrades";
let userCheck = /^[a-z]([0-9][0-9]+|[a-z]+\d*)$/i; 
let resultUser = userCheck.test(username);
console.log(resultUser);