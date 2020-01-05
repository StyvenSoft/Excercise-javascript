// coincide con todas las letras y números en jennyStr
let jennyStr = "Jenny8675309";
let oneRegex = /[a-z0-9]/ig;
jennyStr.match(oneRegex);



let sample = "Blueberry 3.141592653s are delicious.";
let myRegex = /[h-s2-6]/ig; 
let result = sample.match(myRegex);

console.log(result);

// conjuntos de caracteres negados  carácter de intercalación "^"

let quoteSample = "3 blind mice.";
let myRegexpre = /[^0-9aeiou]/gi; 
let resultOne = quoteSample.match(myRegexpre);
console.log(resultOne);


let firstString = "Ricky is first and can be found.";
let firstRegex = /^Ricky/;
firstRegex.test(firstString);
// Returns true
let notFirst = "You can't find Ricky now.";
firstRegex.test(notFirst);
// Returns false

let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/; 
let resultCal = calRegex.test(rickyAndCal);
console.log(resultCal);


// coinciden que se producen una o más veces "+"
let difficultSpelling = "Mississippi";
let myRegexpress = /ss+/g; 
let resultTwo = difficultSpelling.match(myRegexpress);

let crowd = 'P1P2P3P4P5P6CCCP7P8P9';

let reCriminals = /C+/; 

let matchedCriminals = crowd.match(reCriminals);
console.log(matchedCriminals);

// Multiples coincidencias "*"

let soccerWord = "gooooooooal!";
let gPhrase = "gut feeling";
let oPhrase = "over the moon";
let goRegex = /go*/;
soccerWord.match(goRegex); // Returns ["goooooooo"]
gPhrase.match(goRegex); // Returns ["g"]
oPhrase.match(goRegex); // Returns null

let chewieQuote = "Aaaaa! help me";
let chewieRegex = /Aa*/; 
let resultThree = chewieQuote.match(chewieRegex);
console.log(resultThree);

let text = "<h1>Winter is coming</h1>";
let regexpre = /<[a-z].*?>/; 
let resultFour = text.match(regexpre);
console.log(resultFour);

// buscar el final de las cadenas "$"

let theEnding = "This is a never ending story";
let storyRegex = /story$/;
storyRegex.test(theEnding);
// Returns true
let noEnding = "Sometimes a story will have to end";
storyRegex.test(noEnding); // Returns false

let caboose = "The last car on a train is the caboose";
let lastRegex = /caboose$/; 
let resultCab = lastRegex.test(caboose);

// clase de caracteres que coincide con el alfabeto es "\w" Este atajo es igual a [A-Za-z0-9_].

let longHand = /[A-Za-z0-9_]+/;
let shortHand = /\w+/;
let numbers = "42";
let varNames = "important_var";
longHand.test(numbers); // Returns true
shortHand.test(numbers); // Returns true
longHand.test(varNames); // Returns true
shortHand.test(varNames); // Returns true


// Use la clase de caracteres abreviados \w para contar el número de caracteres alfanuméricos

let quoteSampleAlpha = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/g; // Change this line
let resultAlpha = quoteSampleAlpha.match(alphabetRegexV2).length;

// buscar el opuesto de "\W" (En mayuscula)
// Este acceso directo es el mismo que [^A-Za-z0-9_]

let shortHandOpp = /\W/;
let numbersOpp = "42%";
let sentence = "Coding!";
numbersOpp.match(shortHandOpp); // Returns ["%"]
sentence.match(shortHandOpp); // Returns ["!"]

let quoteSampleFive = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /\W/g; // opuesto y global
let resultFive = quoteSampleFive.match(nonAlphabetRegex).length;

console.log(resultFive);


// buscar caracteres de dígitos es "\d"
// es igual a la clase de caracteres [0-9]

let movieName = "2001: A Space Odyssey";
let numRegex = /\d/g; // expresion regular para unir todos los números
let noNumRegex = /\D/g; // buscar caracteres que no sean dígitos
let resultMovie = movieName.match(numRegex).length;
console.log(resultMovie);

// buscar espacios en blanco usando "\s"

let whiteSpace = "Whitespace. Whitespace everywhere!"
let spaceRegex = /\s/g;
whiteSpace.match(spaceRegex);
// Returns [" ", " "]

let sampleWhite = "Whitespace is important in separating words";
let countWhiteSpace = /\s/g;
let resultWhite = sampleWhite.match(countWhiteSpace);
console.log(resultWhite);

// coincide con caracteres que no sean espacios en blanco "\S"

let notwhiteSpace = "Whitespace. Whitespace everywhere!"
let nonSpaceRegex = /\S/g;
notwhiteSpace.match(nonSpaceRegex).length; // Returns 32


