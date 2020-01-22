// Creacion de objetos simples

let duck = {
  name: "Aflac",
  numLegs: 2
};

let dog = {
    name : "Ruff",
    numLegs : 4
};
let cat = {
  name: "Spot",
  numLegs: 4
};
console.log(cat.name);
console.log(cat.numLegs);

// creando un método en un objeto

let hen = {
  name: "Lhit",
  numLegs: 2,
  sayName: function() {return "The name of this hen is " + hen.name + ".";}
};
console.log(hen.sayName());

let parrot = {
  name: "Spot",
  numLegs: 2,
  sayLegs : function (){ return "This parrot has " + parrot.numLegs + " legs."  }
};

console.log(parrot.sayLegs());

// reutilizar objeto con la palabra clave "This"

let pigeon = {
  name: "Frehh",
  numLegs: 2,
  sayName: function() {return "The name of this pigeon is " + this.name + ".";}
};
console.log(pigeon.sayName())
let horse = {
  name: "Spot",
  numLegs: 4,
  sayLegs: function() {return "This horse has " + this.numLegs + " legs.";}
};

console.log(horse.sayLegs());

// Definir una Función Constructora
// Los constructores son funciones que crean nuevos objetos

function Bird() {
  this.name = "Albert";
  this.color = "blue";
  this.numLegs = 2;
}
let blueBird = new Bird();

blueBird.name; // => Albert
blueBird.color; // => blue
blueBird.numLegs; // => 2
// Modificando su propiedad sayName
blueBird.name = 'Elvira';
blueBird.name; // => Elvira


// se definen con un nombre en mayúscula
// usan la palabra clave this para establecer las propiedades del objeto que crearán
// definen propiedades y comportamientos en lugar de devolver un valor como podrían hacerlo otras funciones

function Dog (){
    this.name = "Yiko";
    this.color = "Brown";
    this.numLegs = 4
}

let hound = new Dog();

// ampliando los constructores para recibir argumentos
function BirdTwo(name, color) {
  this.name = name;
  this.color = color;
  this.numLegs = 2;
}

// Pasando los valores como argumentos
let cardinal = new Bird("Bruce", "red");

cardinal.name // => Bruce
cardinal.color // => red
cardinal.numLegs // => 2

console.log(cardinal);

function DogTwo(name, color) {
    this.name = name;
    this.color = color;
    this.numLegs = 4;
}

let terrier = new DogTwo("Aldre", "Black");

console.log(terrier);

// Verificar el Constructor de un Objeto con "instanceof"

let BirdThree = function(name, color) {
  this.name = name;
  this.color = color;
  this.numLegs = 2;
}

let crow = new BirdThree("Alexis", "black");

crow instanceof BirdThree; // => true

// objeto sin usar un constructor

let canary = {
  name: "Mildred",
  color: "Yellow",
  numLegs: 2
};

canary instanceof Bird; // => false

// Instanciando un constructores

function House(numBedrooms) {
  this.numBedrooms = numBedrooms;
}

let myHouse = new House(3);

myHouse instanceof House;

// comprendiendo las propiedades propias

function BirdFour(name) {
  this.name  = name;
  this.numLegs = 2;
}
// se llaman own propiedades, porque se definen directamente en el objeto de instancia
let rooster = new BirdFour("Donald");
let toucan = new BirdFour("Tweety");

let ownProps = [];

// El método hasOwnProperty() devuelve un booleano indicando si el objeto tiene la propiedad especificada.
for (let property in rooster) {
  if(rooster.hasOwnProperty(property)) {
    ownProps.push(property);
  }
}

console.log(ownProps); // prints [ "name", "numLegs" ]

// propiedades del prototipo para reducir el código duplicado

function Rabbit(name) {
  this.name = name;
}

Rabbit.prototype.numLegs = 4;

// Add your code above this line
let beagle = new Rabbit("Snop");

console.log(beagle.numLegs);

// iterando sobre todas las propiedades

function DogFour(name) {
  this.name = name;
}

Dog.prototype.numLegs = 4;

let doberman = new DogFour("Snoopy");

let ownPropsTwo = [];
let prototypeProps = [];

for(let property in doberman){
  if(doberman.hasOwnProperty(property)){
    ownPropsTwo.push(property);
  } else {
    prototypeProps.push(property);
  }
}

console.log(ownPropsTwo); // prints ["name"]
console.log(prototypeProps);  // prints ["numLegs"]

// comprendiendo la propiedad "constructor"

function DogFive(name) {
  this.name = name;
}

// Add your code below this line
function joinDogFraternity(candidate) {
  if(candidate.constructor === DogFive){
    return true;
  } else {
    return false;
  }
}
