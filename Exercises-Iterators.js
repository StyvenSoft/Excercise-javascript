// El método forEach()

const colors = ['Blue','Red','Brown','Purple','Black'];

colors.forEach(function(colorItem){
  console.log(` - ${colorItem}`);
});

const fruits = ['mango', 'papaya', 'pineapple', 'apple'];

// Iterate over fruits below
fruits.forEach(fruitsItem =>{
  console.log('I want to eat a ' + fruitsItem);
});

const food = ['bread', 'meat', 'seafood', 'Rice'];

function printFood(element){
	console.log(`My favorite food is ${element}`)
}
food.forEach(printFood);

// El método .map ()
const numbers = [1, 2, 3, 4, 5]; 

const bigNumbers = numbers.map(number => {
  return number * 10;
});
console.log(bigNumbers);

const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

const secretMessage = animals.map(word =>{
  return word[0];
})
console.log(secretMessage.join(''));


const majorNumbers = [500, 600, 700, 800, 900];

const smallNumbers = majorNumbers.map(num =>{
  return num / 100;
})

console.log(smallNumbers);

// El método .filter ()

const words = ['chair', 'music', 'pillow', 'brick', 'pen', 'door', 'medicaments', 'computer']; 

const shortWords = words.filter(word => {
  return word.length < 6;
});

console.log(words); 
console.log(shortWords); 

const randomNumbers = [375, 200, 3.14, 7, 13, 852, 359];

// Call .filter() on randomNumbers below
const smallerNumbers = randomNumbers.filter(num =>{
  return num < 250;
})
console.log(smallerNumbers);


const favoriteWords = ['Cool', 'nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];
const longFavoriteWords = favoriteWords.filter(word => {
  return word.length > 7;
})
console.log(longFavoriteWords);

// El método .findIndex ()

const jumbledNums = [123, 25, 78, 5, 9]; 

const lessThanTen = jumbledNums.findIndex(num => {
  return num < 10;
});

console.log(lessThanTen, jumbledNums[3]);

const greaterThan1000 = jumbledNums.findIndex(num => {
  return num > 1000;
});

console.log(greaterThan1000);

const animalsTwo = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];

const foundAnimal = animalsTwo.findIndex(word =>{
  return word === 'elephant';
});

console.log(foundAnimal);

const startsWithS = animalsTwo.findIndex(word =>{
  return word[0] === 's';
});
  
console.log(startsWithS);

// El método .reduce ()

const numbersReduce = [1, 2, 4, 10];

const summedNums = numbersReduce.reduce((accumulator, currentValue) => {
  return accumulator + currentValue
})

console.log(summedNums);

const numbersAlter = [1, 2, 4, 10];

const summedNumsAlter = numbersAlter.reduce((accumulator, currentValue) => {
  return accumulator + currentValue
}, 100)  // <- Second argument for .reduce() Valor Inicial

console.log(summedNumsAlter);


const newNumbers = [1, 3, 5, 7];

const newSum = newNumbers.reduce((accumulator, currentValue) =>{
  console.log('The value of accumulator: ', accumulator);
  console.log('The value of currentValue: ', currentValue);
  return accumulator + currentValue;

},10);

console.log(newSum);

// más iteradores

const wordsIter = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];

console.log(wordsIter.some((word) => {
  return word.length < 6;
}));

// Use filter to create a new array
const interestingWords = wordsIter.filter(word => word.length > 5);

console.log(interestingWords);
// return elements that have length greater than 5.

console.log(interestingWords.every((word) => {
  return word.length > 5;
} ));

const cities = ['Orlando', 'Dubai', 'Edinburgh', 'Chennai', 'Accra', 'Denver', 'Eskisehir', 'Medellin', 'Yokohama'];

const nums = [1, 50, 75, 200, 350, 525, 1000];


cities.forEach(city => console.log('Have you visited ' + city + '?'));


const longCities = cities.filter(city => city.length > 7);


const word = cities.reduce((acc, currVal) => {
  return acc + currVal[0]
}, "C");

console.log(word)


const smallerNums = nums.map(num => num - 5);


nums.some(num => num < 0);