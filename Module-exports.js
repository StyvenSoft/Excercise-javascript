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

// Named Imports
// importar objetos almacenados en una variable

import { specialty, isVegetarian } from './menu';
console.log(specialty);

// Example

import { availableAirplanes, flightRequirements, meetsStaffRequirements  } from './airplane';

function displayFuelCapacity(){
  availableAirplanes.forEach(function(element){
    console.log('Fuel Capacity of ' + element.name + ': ' + element.fuelCapacity);
  });
};

displayFuelCapacity();

function displayStaffStatus(){
availableAirplanes.forEach(function(element){
  console.log(element.name + ' meets staff requirements: ' + meetsStaffRequirements(element.availableStaff, flightRequirements.requiredStaff) );
});
}

displayStaffStatus();

// Output:
//
// Fuel Capacity of AeroJet: 800
// Fuel Capacity of SkyJet: 500
// AeroJet meets staff requirements: true
// SkyJet meets staff requirements: false


// Export Named Exports
// se pueden exportar tan pronto como se declaran

export let specialty = '';
export function isVegetarian() {
};
function isLowSodium() {
};

// example Named exports

export let availableAirplanes = [
  {
    name: 'AeroJet',
    fuelCapacity: 800,
    availableStaff: ['pilots', 'flightAttendants', 'engineers', 'medicalAssistance', 'sensorOperators'],
    maxSpeed : 1200,
    minSpeed : 300
  },
  {
  name: 'SkyJet',
  fuelCapacity: 500,
  availableStaff: ['pilots', 'flightAttendants'],
  maxSpeed : 800,
  minSpeed : 200
  }
];

export let flightRequirements = {
  requiredStaff : 4,
  requiredSpeedRange : 700
};

export function meetsStaffRequirements(availableStaff, requiredStaff) {
  if (availableStaff.length >= requiredStaff) {
      return true;
      }
  else {
    return false;
  }
}

export function meetsSpeedRangeRequirements(maxSpeed, minSpeed, requiredSpeedRange) {
  let range = maxSpeed - minSpeed;
  if(range > requiredSpeedRange){
     return true;
  }else {
    return false;
  }
};
