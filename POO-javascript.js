// anular métodos heredados


function Animal() { }
Animal.prototype.eat = function() {
  return "nom nom nom";
};
function Bird() { }

// Inherit all methods from Animal
Bird.prototype = Object.create(Animal.prototype);

// Bird.eat() overrides Animal.eat()
Bird.prototype.eat = function() {
  return "peck peck peck";
};


function Bird() { }

Bird.prototype.fly = function() { return "I am flying!"; };

function Penguin() { }
Penguin.prototype = Object.create(Bird.prototype);
Penguin.prototype.constructor = Penguin;

Penguin.prototype.fly = function() { return "Alas, this is a flightless bird."; };

let penguin = new Penguin();
console.log(penguin.fly());

// usando un Mixin para agregar un comportamiento común entre objetos no relacionados
// Un mixin permite que otros objetos usen una colección de funciones.

let flyMixin = function(obj) {
  obj.fly = function() {
    console.log("Flying, wooosh!");
  }
};

let bird = {
  name: "Donald",
  numLegs: 2
};

let plane = {
  model: "777",
  numPassengers: 524
};

flyMixin(bird);
flyMixin(plane);

bird.fly(); // prints "Flying, wooosh!"
plane.fly(); // prints "Flying, wooosh!"


let boat = {
  name: "Warrior",
  type: "race-boat"
};

// usando un Mixin

let glideMixin = function(obj){
  obj.glide = function (){
    console.log("gliding");
  }
}
glideMixin(bird);
glideMixin(boat);

bird.glide();

// utilizando closure para proteger las propiedades dentro de un objeto de ser modificado externamente
// Hacer que una propiedad pública sea privada creando una variable dentro de la función constructora.

function Bird() {
  let hatchedEgg = 10; // private variable

  /* método disponible públicamente que un objeto pájaro puede usar */
  this.getHatchedEggCount = function() {
    return hatchedEgg;
  };
}
let ducky = new Bird();
ducky.getHatchedEggCount(); // returns 10

// closure
function BirdTwo() {
  let weight = 15;
  this.getWeight = function() {
    return weight;
  }
}

// la Expresión de Función Invocada Inmediatamente (IIFE)

// (function () { /* código aquí */ });
// !function () { /* código aquí */ };

(function () {
  console.log("Chirp, chirp!");
})();

(function() {
  console.log("A cozy nest is ready");
})();

//  usando un IIFE para crear un módulo

//  agrupando mixins en un módulo
let motionModule = (function () {
  return {
    glideMixin: function(obj) {
      obj.glide = function() {
        console.log("Gliding on the water");
      };
    },
    flyMixin: function(obj) {
      obj.fly = function() {
        console.log("Flying, wooosh!");
      };
    }
  }
})();

let duckTwo = {
  name: "Donalds",
  numLegs: 2
};
motionModule.glideMixin(duckTwo);
duckTwo.glide();

// Creando modulo funModule

let funModule = (function(){
  return {
    isCuteMixin : function(obj) {
    obj.isCute = function() {
    return true;
    };
  },
  singMixin : function(obj) {
  obj.sing = function() {
    console.log("Singing to an awesome tune");
  };
}

}
})();
