// Loops and Iterators
// Bucles anidados

const myArray = [6, 19, 20];
const yourArray = [19, 81, 2];
for (let i = 0; i < myArray.length; i++) {
  for (let j = 0; j < yourArray.length; j++) {
    if (myArray[i] === yourArray[j]) {
      console.log('Ambos bucles tienen el número: ' + yourArray[j])
    }
  }
};

const bobsFollowers = [ 'Jhon', 'Diego', 'Luis', 'Juan' ];
const tinasFollowers = [ 'Julian', 'Diego', 'Jhon' ];
const mutualFollowers = [];

for(let i = 0; i < bobsFollowers.length; i++){
  for(let j = 0; j < tinasFollowers.length; j++){
    if(bobsFollowers[i] === tinasFollowers[j]){
       mutualFollowers.push(tinasFollowers[j]);
    }
  }
}
console.log(mutualFollowers);


for (let counterOne = 1; counterOne < 4; counterOne++){
  console.log(counterOne);
}

// Un ciclo while que imprime 1, 2 y 3
let counterTwo = 1;
while (counterTwo < 4) {
  console.log(counterTwo);
  counterTwo++;
}


const cards = ['diamond', 'spade', 'heart', 'club'];

let currentCard;
while(currentCard != 'spade'){
      currentCard = cards[Math.floor(Math.random() * 4)];
  console.log(currentCard);
}


let countString = '';
let i = 0;

do {
  countString = countString + i;
  i++;
} while (i < 5);

console.log(countString);


let cupsOfSugarNeeded = 7;
let cupsAdded = 0;

do{
  cupsAdded += cupsAdded;
  cupsAdded++;
  console.log(cupsAdded);
}while(cupsAdded < cupsOfSugarNeeded);


for (let i = 0; i < 99; i++) {
  if (i > 2 ) {
     break;
  }
  console.log('Banana.');
}

console.log('Naranja, ¡te alegra que haya roto el circuito!!');


const rapperArray = ["Lil' Kim", "Jay-Z", "Nate Dogg", "Tupac"];


for (let i = 0; i < rapperArray.length; i++){
  console.log(rapperArray[i]);
  if(rapperArray[i] === 'Nate Dogg'){
    break;
  }
}
console.log("Y si no lo sabes, ahora lo sabes.");


const checkThatTwoPlusTwoEqualsFourAMillionTimes = () => {
  for(let i = 1; i <= 1000000; i++) {
    if ( (2 + 2) != 4) {
      console.log('Algo ha salido muy mal :( ');
    }
  }
}


const is2p2 = checkThatTwoPlusTwoEqualsFourAMillionTimes;

is2p2();

console.log(is2p2.name);


const timeFuncRuntime = funcParameter => {
   let t1 = Date.now();
   funcParameter();
   let t2 = Date.now();
   return t2 - t1;
}

const addOneToOne = () => 1 + 1;

timeFuncRuntime(addOneToOne);


timeFuncRuntime(() => {
  for (let i = 10; i>0; i--){
    console.log(i);
  }
});



const artists = ['Picasso', 'Kahlo', 'Matisse', 'Utamaro'];

artists.forEach(artist => {
  console.log(artist + ' es uno de mis artistas favoritos.');
});

const numbers = [1, 2, 3, 4, 5];

const squareNumbers = numbers.map(number => {
  return number * number;
});

console.log(squareNumbers);

const things = ['desk', 'chair', 5, 'backpack', 3.14, 100];

const onlyNumbers = things.filter(thing => {
  return typeof thing === 'number';
});

console.log(onlyNumbers);
