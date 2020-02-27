// Construyendo un Objeto promise

// Usamos la palabra clave "new" y el "Promise" método constructor

const executorFunction = (resolve, reject) => { };
const myFirstPromise = new Promise(executorFunction);

// Las funciones resolve()y reject()no están definidas por el programado

const executorFunction = (resolve, reject) => {
  if (someCondition) {
      resolve('I resolved!');
  } else {
      reject('I rejected!');
  }
}
const myFirstPromise = new Promise(executorFunction);


const inventory = {
  sunglasses: 1900,
  pants: 1088,
  bags: 1344
};
const myExecutor = (resolve, reject) =>{
  if (inventory.sunglasses > 0) {
    resolve('Sunglasses order processed.');
  } else {
    reject('That item is sold out.')
  }
}

const orderSunglasses = () =>{
  return new Promise(myExecutor);
}
const orderPromise = orderSunglasses();

console.log(orderPromise);

// run: node app.js
//Oputput: Promise { 'Sunglasses order processed.' }


//The Node setTimeout() Function
// Usando los Promise objetos devueltos como resultado de una operación asincrónica.

const delayedHello = () => {
  console.log('Hi! This is an asynchronous greeting!');
};

setTimeout(delayedHello, 2000);

console.log("This is the first line of code in app.js.");

const usingSTO = () =>{
  console.log('Yay! Coding is so fun!!');
}
setTimeout(usingSTO, 2000);

console.log("This is the last line of code in app.js.");

// Las funciones onFulfilled y onRejected
// Para manejar una promesa "exitosa", o una promesa que se resolvió, invocamos .then()

const prom = new Promise((resolve, reject) => {
  resolve('Yay!');
});

const handleSuccess = (resolvedValue) => {
  console.log(resolvedValue);
};

prom.then(handleSuccess); // Prints: 'Yay!'

// Podemos pasar un onFulfilledy una onRejecteddevolución de llamada a .then().

let prom = new Promise((resolve, reject) => {
  let num = Math.random();
  if (num < .5 ){
    resolve('Yay!');
  } else {
    reject('Ohhh noooo!');
  }
});

const handleSuccess = (resolvedValue) => {
  console.log(resolvedValue);
};

const handleFailure = (rejectionReason) => {
  console.log(rejectionReason);
};

prom.then(handleSuccess, handleFailure);

// Example verificar inventario

const {checkInventory} = require('./library.js');

const order = [['sunglasses', 1], ['bags', 2]];


const  handleSuccess = (value) => {
  console.log(value);
};

const handleFailure = (value) =>{
  console.log(value);
};

checkInventory(order).then(handleSuccess, handleFailure);
