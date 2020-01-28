//  Ejemplo de un método setter

const person = {
  _age: 37,
  set age(newAge){
    if (typeof newAge === 'number'){
      this._age = newAge;
    } else {
      console.log('You must assign a number to age');
    }
  }
};


person.age = 40;
console.log(person._age); // Logs: 40
person.age = '40'; // Logs: You must assign a number to age

// Método getter y setter

const robot = {
  _model: '1E78V2',
  _energyLevel: 100,
  _numOfSensors: 15,
  get numOfSensors(){
    if(typeof this._numOfSensors === 'number'){
      return this._numOfSensors;
    } else {
      return 'Sensors are currently down.'
    }
  },
  set numOfSensors(num){
    if(typeof num === 'number' && num >= 0) {
       return this._numOfSensors = num;
    } else {
      console.log('Pass in a number that is greater than or equal to 0');
    }
  }
};

robot.numOfSensors = 100;
console.log(robot.numOfSensors);


const admin = {
  _id : 1,
  _name : 'Juan',
  _job : 'Coornidador',
  get idAdmin(){
    if(typeof this._id === 'number'){
      return this._id;
    } else {
      console.log('Activo');
    }
  },
  set nameAdmin(str){
    if (typeof str === 'string') {
      return this._name = str;
    } else {
      console.log('Error en nombre');
    }
  }
};

admin.nameAdmin = 'Arnol';
console.log(`Administrador: ${admin._id}
Nombre actual: ${admin._name}
cargo: ${admin._job}`);

// factory functions

const monsterFactory = (name, age, energySource, catchPhrase) => {
  return {
    name: name,
    age: age,
    energySource: energySource,
    scare() {
      console.log(catchPhrase);
    }
  }
};

const ghost = monsterFactory('Ghouly', 251, 'ectoplasm', 'BOO!');
ghost.scare(); // 'BOO!'

// Ejemplo Factory function

const robotFactory = (model, mobile) =>{
  return {
    model : model,
    mobile : mobile,
    beep (){
      console.log('Beep Boop');
    }
  }
}
const tinCan = robotFactory ('P-500', true);
tinCan.beep();

// Property Value Shorthand

const monsterFactoryOne= (name, age) => {
  return {
    name: name,
    age: age
  }
};

const monsterFactoryTwo = (name, age) => {
  return {
    name,
    age
  }
};

// Desestructuración de variables

function robotFactoryThree(model, mobile){
  return {
    model,
    mobile,
    beep() {
      console.log('Beep Boop');
    }
  }
}

// Para comprobar que la técnica abreviada del valor de la propiedad funcionó:
const newRobot = robotFactory('P-501', false)
console.log(newRobot.model)
console.log(newRobot.mobile)

// Asignación Desestructurada

const vampire = {
  name: 'Dracula',
  residence: 'Transylvania',
  preferences: {
    day: 'stay inside',
    night: 'satisfy appetite'
  }
};

const { residence } = vampire;
console.log(residence); // Prints 'Transylvania'

const { day } = vampire.preferences;
console.log(day); // Prints 'stay inside'

const robotDes = {
  model: '1E78V2',
  energyLevel: 100,
  functionality: {
    beep() {
      console.log('Beep Boop');
    },
    fireLaser() {
      console.log('Pew Pew');
    },
  }
};
const { functionality } = robotDes;
functionality.beep();


// Métodos de objetos incorporados
// Object.assign(), Object.entries() y Object.keys()

const robotThree = {
	model: 'SAL-1000',
  mobile: true,
  sentient: false,
  armor: 'Steel-plated',
  energyLevel: 75
};

// What is missing in the following method call?
const robotKeys = Object.keys(robotThree);

console.log(robotKeys);

// Declare robotEntries below this line:
const robotEntries = Object.entries(robotThree);

console.log(robotEntries);

// Declare newRobot below this line:
const newProps = { laserBlaster: true, voiceRecognition: true}

const newRobotThree = Object.assign(newProps);

console.log(newRobotThree);
