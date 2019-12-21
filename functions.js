const greeting = (name = "Anonymous") => "Hello " + name;

console.log(greeting("John")); 
console.log(greeting()); 


const increment = (number, value = 1) => number + value;

console.log(increment(5, 2)); 
console.log(increment(5)); 

// Parametros Rest y Spread

const showData = (...datos) =>{
  console.log(datos)
}

showData('Diego', 24, 'diego@email.com', 'Perú');


const showInfo = (...info) =>{
  console.log(info);
}

const arrayInfo = ['Gabriel', 21, 'Bogota'];
showInfo(...arrayInfo);


function howMany(...args) {
  return "You have passed " + args.length + " arguments.";
}
console.log(howMany(0, 1, 2)); // Pasando 3 argumentos.
console.log(howMany("string", null, [1, 2, 3], { }));


const sum = (...args) => {
  return args.reduce((a, b) => a + b, 0);
}
console.log(sum(1, 2, 3)); 


const arr = [6, 89, 3, 45];
const maximus = Math.max(...arr);

const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;

arr2 = [...arr1];  

console.log(arr2);

// El método map() 

let numbers = [8, 24, 6, 12, 52, 68, 36];
let multipliedNumbers = numbers.map(number => number *2);
let addNumbers = numbers.map(number => number + 2);

console.log(numbers);
console.log(multipliedNumbers);
console.log(addNumbers);

let team = [
  {
    name: 'Steve',
    age: 23
  },
  {
    name: 'Maria',
    age: 21
  }
]

team.map(teamMembers => teamMembers.age += 10);
console.log(team);


//Método filter()

let filNumber = numbers.filter( number => (number > 18 && number < 52));

console.log(filNumber);

//Método reduce

let reduceValue = numbers.reduce( (acc, cur) => acc + cur);

console.log(reduceValue);