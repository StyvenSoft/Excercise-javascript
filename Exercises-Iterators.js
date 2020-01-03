// El método forEach()

const colors = ['Blue','Red','Brown','Purple','Black']

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

const animals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];

const foundAnimal = animals.findIndex(word =>{
  return word === 'elephant';
});

console.log(foundAnimal);