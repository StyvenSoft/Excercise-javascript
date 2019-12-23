"use strict";
const person = {
  name: "Rick Nester",
  age: 36
};

// Literal de plantilla con interpolación de líneas y cadenas múltiples
const greeting = `Hello, my name is ${person.name}!
I am ${person.age} years old.`;

console.log(greeting);

let teacher = "Estiff";
let twitter = "@estiff";
let age = 20;

const whoAmI = (myName, myTwitter, myAge) => {
  console.log(`
  Hi, i'm ${myName} and my twitter ${myTwitter},
  and I am ${myAge} years old
  `);
}

whoAmI(teacher, twitter, age);

const fruits = {
  apple: 28,
  orange: 17,
  pear: 54,
}

const entries = Object.entries(fruits)
console.log(entries)

for (const [fruit, count] of entries) {
  console.log(`There are ${count} ${fruit}s`)
}


const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["id-blacklist", "no-dup-keys"]
};
function makeList(arr) {

  const resultDisplayArray = [];
  for (let i = 0; i < arr.length; i++) {
    resultDisplayArray.push(`<li class="text-warning">${arr[i]}</li>`);
  }
  return resultDisplayArray;
}

const resultDisplayArray = makeList(result.success);
console.log(resultDisplayArray);

const navBar = ['Home', 'About me', 'Services', 'Contact'];
const navFormat = navBar.map(item => `<li><a href="#">${item}</a></li>`);

console.log(navFormat);

//Objeto abreviado

const createPerson = (name, age, gender) => {
  return { name, age, gender };
};
console.log(createPerson("Zodiac Hasbro", 56, "male"));

// funcion declarativa
const user = {
  name: "Taylor", sayHello() {
    return `Hello! My name is ${this.name}.`;
  }
};
console.log(user.sayHello());

const bicycle = {
  gear: 2,
  setGear(newGear) {
    return this.gear = newGear;
  }
};

bicycle.setGear(465);
console.log(bicycle.gear);