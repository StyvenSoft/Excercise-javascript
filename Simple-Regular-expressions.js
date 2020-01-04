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
let calRegex = /^Cal/; // Change this line
let resultCal = calRegex.test(rickyAndCal);
console.log(resultCal);


// coinciden que se producen una o más veces "+"
let difficultSpelling = "Mississippi";
let myRegexpress = /ss+/g; // Change this line
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
let regexpre = /<[a-z].*?>/; // Change this line
let resultFour = text.match(regexpre);
console.log(resultFour);
