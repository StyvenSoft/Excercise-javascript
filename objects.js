const user = {
  name : "William",
  age : 23
}

// asignación de desestructuración
const { name, age } = user;

console.log(name, age); 

const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 79,
  tomorrow: 80
};
//const today = HIGH_TEMPERATURES.today;
//const tomorrow = HIGH_TEMPERATURES.tomorrow;

const { today, tomorrow } = HIGH_TEMPERATURES;

console.log(today, tomorrow);

const { today: highToday, tomorrow: highTomorrow } = HIGH_TEMPERATURES;

console.log(highToday); // debiera ser 79
console.log(highTomorrow); 


let dishs = [ 'Quesadilla', 'Enchiladas', 'Tacos' ];

const [ dish1, dish2, dish3 ] = dishs;

console.log(dish3, dish2, dish1);

//Objetos anidados

const person = {
  johnDoe: { 
    size: 34,
    email: 'johnDoe@email.com'
  }
};

const { johnDoe: { size, email }} = person;

console.log(Object.keys(person));
console.log(Object.values(person));
console.log(size, email);

// Objetos anidados

const LOCAL_FORECAST = {
  yesterdayTwo: { low: 61, high: 75 },
  todayTwo: { low: 64, high: 78 },
  tomorrowTwo: { low: 68, high: 80 }
};

const { todayTwo: { low: lowTodayTwo, high: highTodayTwo} } = LOCAL_FORECAST;

console.log(lowTodayTwo); // debiera ser 64
console.log(highTodayTwo);

let a = 8, b = 6;

[a, b] = [b, a];

console.log('a = ' + a); // debiera ser 6
console.log('b = ' + b);


const [x, y, ...arr] = [1, 2, 3, 4, 5, 7];
console.log(x, y); // 1, 2
console.log(arr);


const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {
  "use strict";
  const [,, ...arrList] = list; 
  return arrList;
}
const arrList = removeFirstTwo(source);
console.log(arrList); // debiera ser [3,4,5,6,7,8,9,10]
console.log(source);

const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};

const half = ({ max, min }) => (max + min) / 2.0;

console.log(stats); // debiera ser un objecto
console.log(half(stats));