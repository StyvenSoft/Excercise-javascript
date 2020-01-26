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

// Estbleciendo prototipo a un nuevo objeto

function DogSix(name) {
  this.name = name;
}

DogSix.prototype = {
  numLegs : 2,
  eat : function(){
    console.log("purine");
  },
  describe : function(){
    console.log("Name is " + this.name)
  }
};

// recordar establecer la propiedad del constructor al cambiar el prototipo

Bird.prototype = {
  constructor: Bird, // the constructor property
  numLegs: 2,
  eat: function() {
    console.log("nom nom nom");
  },
  describe: function() {
    console.log("My name is " + this.name);
  }
};

function Dog(name) {
  this.name = name;
}

Dog.prototype = {
  constructor: Dog,
  numLegs: 4,
  eat: function() {
    console.log("nom nom nom");
  },
  describe: function() {
    console.log("My name is " + this.name);
  }
};

// un objeto hereda prototype directamente de la función constructora que lo creó

function Character(name, posX, postY){
  this.name = name;
  this.posX = posX;
  this.postY = postY;

  this.moveX = function(){
    this.posX++;
  }
  this.moveY = function(){
    this.postY++;
  }
}
// isPrototypeOf

function DogNine(name) {
  this.name = name;
}

let beagleNine = new DogNine("Snoopy");

DogNine.prototype.isPrototypeOf(beagleNine);

//  La propiedad "prototype"

let personajeOne = new Character("Elfo", 100, 200);
let personajeTwo = new Character("Dimy", 150, 200);

console.log("Nombre: " + personajeOne.name + " posición x = " + personajeOne.posX);

Character.prototype.lifeLevel = 0;
personajeOne.lifeLevel = 100;

console.log("Nivel de vida: "+ personajeOne.lifeLevel + " " + personajeOne.name);
console.log("Nivel de vida: "+ personajeTwo.lifeLevel + " " + personajeTwo.name);

// usamdo la herencia para no repetirse

function Animal() { };

Animal.prototype = {
  constructor: Animal,
  describe: function() {
    console.log("My name is " + this.name);
  }
};

Bird.prototype = {
  constructor: Bird
};

Dog.prototype = {
  constructor: Dog
};

// Don't Repeat Yourself (DRY)

function Cat(name) {
  this.name = name;
}

Cat.prototype = {
  constructor: Cat,

};

function Bear(name) {
  this.name = name;
}

Bear.prototype = {
  constructor: Bear,

};

function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

// Heredar Comportamientos de un Supertipo
// Object.create(obj)

let duckThree = Object.create(Animal.prototype);
let beagleThree = Object.create(Animal.prototype);

duckThree.eat(); // Should print "nom nom nom"
beagleThree.eat(); // Should print "nom nom nom"

//  instancias de Dog heredando de Animal.
function Dog() { }

Dog.prototype = Object.create(Animal.prototype);

let beagleFive = new Dog('Luck');
beagleFive.eat();  // Should print "nom nom nom"


// restableciendo una propiedad de constructor heredada

function AnimalHer() { }
function BirdHer() { }
function DogHer() { }

BirdHer.prototype = Object.create(AnimalHer.prototype);
DogHer.prototype = Object.create(AnimalHer.prototype);

// Add your code below this line

BirdHer.prototype.constructor = BirdHer;
DogHer.prototype.constructor = DogHer;

let duckHer = new BirdHer();
let beagleHer = new DogHer();

duckHer.constructor
beagleHer.constructor


// Agreguando Métodos Después de Herencia

function AnimalOne() { }
AnimalOne.prototype.eat = function() { console.log("Lok Lok"); };

function DogPug() { }

DogPug.prototype = Object.create(AnimalOne.prototype);
DogPug.prototype.constructor = DogPug;

DogPug.prototype.bark = function() {
    console.log("Woof!")
}

let beagleOther = new DogPug();

beagleOther.eat(); // Should print "nom nom nom"
beagleOther.bark(); // Should print "Woof!"
