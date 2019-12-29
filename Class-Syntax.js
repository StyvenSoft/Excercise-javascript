// instancia de un objeto en ES5

let SpaceShuttle = function(targetPlanet){
  this.targetPlanet = targetPlanet;
}
let zeus = new SpaceShuttle('Jupiter');

console.log(zeus);

// nueva sintaxis para crear objetos ES6

class SpaceShuttleClass {
  constructor(targetPlanet) {
    this.targetPlanet = targetPlanet;
  }
}
const zeusClass = new SpaceShuttleClass('Saturno');
console.log(zeusClass);


class Vegetable{
    constructor(name){
        this.name = name;
    }
}

const carrot = new Vegetable('carrot');
console.log(carrot.name); 


// captadores y establecedores para controlar el acceso a un objeto

// getters y setters

let course = {
  title: "Javascript",
  numbe: 12,
  tutor_value: "Ricks",
  get tutor(){
    return this.tutor_value.toUpperCase();
  },
  set tutor(tutor){
    if(tutor === "" || (typeof tutor == "undefined")){
      return;
    }
    this.tutor_value = tutor;
  }
}
course.tutor = "";
console.log(course.tutor);

// Class function

class Book {
  constructor(author) {
    this._author = author;
  }
  // getter
  get writer() {
    return this._author;
  }
  // setter
  set writer(updatedAuthor) {
    this._author = updatedAuthor;
  }
}
const lol = new Book('Anonymous');
console.log(lol.writer);  
lol.writer = 'Ayn Rand';
console.log(lol.writer);


// Convierte grados fahrenheit a celsius

class Thermostat {
    constructor(fahrenheit){
        this._fahrenheit = fahrenheit;
    }
    get temperature(){
        return (5 / 9) * (this._fahrenheit - 32);
    }
    set temperature(celsius){
        this._fahrenheit = (celsius * 9.0) / 5 + 32;
    }
}

const thermos = new Thermostat(76); // setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in C
console.log(thermos);
console.log(temp);

thermos.temperature = 26;
temp = thermos.temperature; 
console.log(temp)