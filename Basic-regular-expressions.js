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

// especificadores de cantidad se usan con llaves ( {y })

let A4 = "aaaah";
let A2 = "aah";
let multipleA = /a{3,5}h/;
multipleA.test(A4); // Returns true
multipleA.test(A2); // Returns false

let ohStr = "Ohhh no";
let ohRegex = /Oh{3,6} no/; // rango de 3 a 6 letras h
let resultOh = ohRegex.test(ohStr);

//especifique solo el menor número de coincidencias ejemplo /ha{3,}h/

let B4 = "haaaah";
let B2 = "haah";
let B100 = "h" + "a".repeat(100) + "h";
let multipleB = /ha{3,}h/;
multipleB.test(B4); // Returns true
multipleB.test(B2); // Returns false
multipleB.test(B100); // Returns true

let haStr = "Hazzzzah";
let haRegex = /Haz{4,}ah/; // Change this line
let resultHa = haRegex.test(haStr);

// Para especificar un cierto número de patrones, solo tiene ese número entre los corchetes
// Ejemplo /ha{3}h/

let C4 = "haaaah";
let C3 = "haaah";
let C100 = "h" + "a".repeat(100) + "h";
let multipleHA = /ha{3}h/;
multipleHA.test(C4); // Returns false
multipleHA.test(C3); // Returns true
multipleHA.test(C100); // Returns false

let timStr = "Timmmmber";
let timRegex = /Tim{4}ber/; // Solo contiene 4 letras "m"
let resultTim = timRegex.test(timStr);

// especificar la posible existencia de un elemento con un signo de interrogación, "?"

let american = "color";
let british = "colour";
let rainbowRegex= /colou?r/;
rainbowRegex.test(american); // Returns true
rainbowRegex.test(british); // Returns true

let favWord = "favorite";
let favRegex = /favou?rite/; 
let resultFav = favRegex.test(favWord);

// anticipación positiva y negativa
// Los lookaheads para buscar patrones más adelante (?=...)
// búsqueda anticipada negativa (?!...)

let quit = "qu";
let noquit = "qt";
let quRegex= /q(?=u)/;
let qRegex = /q(?!u)/;
quit.match(quRegex); // Returns ["q"]
noquit.match(qRegex); // Returns ["q"]

// verificador de contraseña (ingenuamente) que busca entre 3 y 6 caracteres y al menos un número

let password = "abc123";
let checkPass = /(?=\w{3,6})(?=\D*\d)/;
checkPass.test(password); // Returns true

// coincidir las contraseñas que tengan más de 5 caracteres, no comiencen con números y tengan dos dígitos consecutivos.

let sampleWord = "astronaut";
let pwRegex = /^(?=\w{6})(?=\D+\d{2})/; // Change this line
let resultWord = pwRegex.test(sampleWord);

// verificar grupos de caracteres  paréntesis ()

let testStrGr = "Pumpkin";
let testRegexGr = /P(engu|umpk)in/;
testRegexGr.test(testStrGr);
// Returns true

let myStringName = "Eleanor Roosevelt";
let myRegexName = /(Franklin|Eleanor).*Roosevelt/; // Change this line

let resultName = myRegexName.test(myStringName); // Change this line
// After passing the challenge experiment with myString and see how the grouping works
console.log(resultName);

// reutilizar patrones usando grupos de captura ( )
// Poner la expresión regular del patrón que se repetirá entre paréntesis.
// utilizar una barra diagonal inversa ( \) y luego un número

let repeatStr = "regex regex";
let repeatRegexOne = /(\w+)\s\1/;
repeatRegexOne.test(repeatStr); // Returns true
repeatStr.match(repeatRegexOne); // Returns ["regex regex", "regex"]

// buscar y reemplazar texto en una cadena usando .replace()

let wrongText = "The sky is silver.";
let silverRegex = /silver/;
wrongText.replace(silverRegex, "blue");
// Returns "The sky is blue."

"Code Camp".replace(/(\w+)\s(\w+)/, '$2 $1');
// Returns "Camp Code"
