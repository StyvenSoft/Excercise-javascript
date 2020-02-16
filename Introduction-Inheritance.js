// Herencia de clases
// superclase y subclases

// Example: Parent class "Animal", Child class "Cat" and "Dog"

class Cat {
  constructor(name, usesLitter) {
    this._name = name;
    this._usesLitter = usesLitter;
    this._behavior = 0;
  }

  get name() {
    return this._name;
  }

  get usesLitter() {
    return this._usesLitter;
  }

  get behavior() {
    return this._behavior;
  }

  incrementBehavior() {
    this._behavior++;
  }
}

class Dog {
  constructor(name) {
    this._name = name;
    this._behavior = 0;
  }

  get name() {
    return this._name;
  }

  get behavior() {
    return this._behavior;
  }

  incrementBehavior() {
    this._behavior++;
  }
}
//propiedades y métodos compartidos de las clases

class Animal {
  constructor(name) {
    this._name = name;
    this._behavior = 0;
  }

  get name() {
    return this._name;
  }

  get behavior() {
    return this._behavior;
  }

  incrementBehavior() {
    this._behavior++;
  }

  get usesLitter() {
    return this._usesLitter;
  }
}

// extender clase Cat

class Cat extends Animal {
  constructor(name, usesLitter) {
    super(name);
    this._usesLitter = usesLitter;
  }
}

// Creando una instancia de la clase promise.catch((err) => {

});
const bryceCat = new Cat('Bryce', false);
console.log(bryceCat._name); // output: Bryce

// Ejercicio herencia en clase empleados hospital

class HospitalEmployee {
  constructor(name) {
    this._name = name;
    this._remainingVacationDays = 20;
  }
  get name() {
    return this._name;
  }

  get remainingVacationDays () {
    return this._remainingVacationDays ;
  }
  takeVacationDays(daysOff){
    this._remainingVacationDays -= daysOff;
  }
}

class Doctor {
  constructor(name) {
    this._name = name;
    this._remainingVacationDays = 20;
    this._insurance = insurance;
  }
}
class Nuerse {
    constructor(name) {
    this._name = name;
    this._remainingVacationDays = 20;
    this._certifications = certifications;
  }
}

class Nurse extends HospitalEmployee {
  constructor(name, certifications){
    super(name);
    this._certifications = certifications;
  }
}

const nurseOlynyk = new Nurse('Olynyk', ['Trauma', 'Pediatrics']);

nurseOlynyk.takeVacationDays(5);
console.log(nurseOlynyk.remainingVacationDays);
