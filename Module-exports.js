// Simple example Module

let Menu = {};
Menu.specialty = "Roasted Beet Burger with Mint Sauce";

module.exports = Menu;

// Require module file order.js

const Menu = require('./menu.js');

function placeOrder() {
  console.log('My order is: ' + Menu.specialty);
}

placeOrder();

// seconds example

let Airplane = {};
Airplane.myAirplane = "StarJet";

module.exports = Airplane;

// File Require module

const Airplane = require('./1-airplane.js');

function displayAirplane() {
  console.log(Airplane.myAirplane);
}

displayAirplane();

// envolver cualquier colección de datos y funciones en un objeto

module.exports = {
  specialty: "Roasted Beet Burger with Mint Sauce",
  getSpecialty: function() {
    return this.specialty;
  }
};

const Menu = require('./menu.js');

console.log(Menu.getSpecialty());

// require file

const Airplane = require('./2-airplane.js');
console.log(Airplane.displayAirplane());

// export default

let Menu = {};
export default Menu;

// Second example
let Airplane = {};

Airplane.availableAirplanes = [
  {
    name: 'AeroJet',
    fuelCapacity: 800
  },
  {
  name: 'SkyJet',
  fuelCapacity: 500
  }
];

export default Airplane;


// import (palabra clave para importar objetos)

import Menu from './menu';

function displayFuelCapacity(){
  Airplane.availableAirplanes.forEach(function(element){
    console.log('Fuel Capacity of ' + element.name + ': ' + element.fuelCapacity);
  });
};

displayFuelCapacity();

// Fuel Capacity of AeroJet: 800
// Fuel Capacity of SkyJet: 500


// Named Exports
// Las exportaciones con nombre nos permiten exportar datos mediante el uso de variables.

let specialty = '';
function isVegetarian() {
};
function isLowSodium() {
};

export { specialty, isVegetarian };

// Second example "Named Exports"
let availableAirplanes = [
  {
    name: 'AeroJet',
    fuelCapacity: 800,
    availableStaff: ['pilots', 'flightAttendants', 'engineers', 'medicalAssistance', 'sensorOperators'],
  },
  {
  name: 'SkyJet',
  fuelCapacity: 500,
  availableStaff: ['pilots', 'flightAttendants']
  }
];

let flightRequirements = {
  requiredStaff : 4
};

function meetsStaffRequirements(availableStaff, requiredStaff) {
  if (availableStaff.length >= requiredStaff) {
      return true;
      }
  else {
    return false;
  }
}

export { availableAirplanes, flightRequirements, meetsStaffRequirements };
