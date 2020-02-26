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
