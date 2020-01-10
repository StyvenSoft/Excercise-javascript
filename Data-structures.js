// conjuntos multidimensionales o anidadas

let nestedArray = [ // superior o primer nivel: la matriz más externa
  ['deep'], // una matriz dentro de una matriz, 2 niveles de profundidad
  [
    ['deeper'], ['deeper'] // 2 matrices anidadas 3 niveles de profundidad
  ],
  [
    [
      ['deepest'], ['deepest'] // 2 matrices anidadas 4 niveles de profundidad
    ],
    [
      [
        ['deepest-est?'] // un conjunto anidado de 5 niveles de profundidad
      ]
    ]
  ]
];

console.log(nestedArray[2][1][0][0][0]);

nestedArray[2][1][0][0][0] = 'deeper still';

console.log(nestedArray[2][1][0][0][0]);

// Example array 5 levels

let myNestedArray = [

  ["unshift", false, 1, 2, 3, "complex", "nested"],
  ["loop", "shift", 6, 7, 1000, "method"],
  ["concat", false, true, "spread", "array", ["deep"]],
  ["mutate", 1327.98, "splice", "slice", "push", [["deeper"]]],
  ["iterate", 1.3849, 7, "8.4876", "arbitrary", "depth", [[["deepest"]]]]

];
console.log(myNestedArray);

// Objetos
// Agregar clave-valor a Objetos

let foods = {
  apples: 25,
  oranges: 32,
  plums: 28
};

foods.bananas = 13;
foods.grapes = 35;
foods.strawberries = 27;

console.log(foods);

// Consultando datos y adregando a una nueva variable.

let FCC_User = {
  username: 'awesome_coder',
  followers: 572,
  points: 1741,
  completedProjects: 15
};

let userDataA = FCC_User.followers;
let userDataB = FCC_User['completedProjects'];

// modificar un objeto anidado dentro de un objeto

//Example objeto complejo:

let nestedObject = {
  id: 28802695164,
  date: 'December 31, 2016',
  data: {
    totalUsers: 99,
    online: 80,
    onlineStatus: {
      active: 67,
      away: 13
    }
  }
};
console.log(nestedObject);

// modificar clave

let userActivity = {
  id: 23894201352,
  date: 'January 1, 2020',
  data: {
    totalUsers: 51,
    online: 42
  }
};

userActivity.data.totalUsers = 58;
userActivity.data.online = 45;

console.log(userActivity);

// propiedades de acceso con notación de corchetes []

let foodsScan = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27
};

function checkInventory(scannedItem) {
  let value = foodsScan[scannedItem];
  return value;
}

console.log(checkInventory("apples"));

// palabra clave "delete" para eliminar las propiedades del objeto

let foodsDel = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27
};

delete foodsDel.oranges;
delete foodsDel.plums;
delete foodsDel.strawberries;

console.log(foodsDel);

// comprobar si un objeto tiene una propiedad

// 1-  hasOwnProperty()
// 2- Método in

let users = {
  Alan: {
    age: 27,
    online: true
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: true
  },
  Ryan: {
    age: 19,
    online: true
  }
};

users.hasOwnProperty('Alan');
'Alan' in users;

function isEveryoneHere(obj) {
  if(
    obj.hasOwnProperty("Alan") &&
    obj.hasOwnProperty("Jeff") &&
    obj.hasOwnProperty("Sarah") &&
    obj.hasOwnProperty("Ryan")
  ){
      return true
  }  return false
}

console.log(isEveryoneHere(users));

for (let user in users) {
  console.log(user);
}

let usersList = {
  Alan: {
    age: 27,
    online: false
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: false
  },
  Ryan: {
    age: 19,
    online: true
  }
};
function countOnline(obj) {

  let result = 0;
  for (let user in obj) {
    if (obj[user].online === true) {
      result++;
    }
  }
  return result;
}
console.log(countOnline(usersList));

// generar una matriz de todas las claves de objeto con Object.keys()

function getArrayOfUsers(obj) {
  // change code below this line
  return Object.keys(obj)
  // change code above this line
}

console.log(getArrayOfUsers(usersList));

// agregar propiedad a un objeto anidado
let userInfo = {
  name: 'Kenneth',
  age: 28,
  data: {
    username: 'kennethCodesAllDay',
    joinDate: 'March 26, 2016',
    organization: 'Codefree',
    friends: [
      'Sam',
      'Kira',
      'Tomo'
    ],
    location: {
      city: 'San Francisco',
      state: 'CA',
      country: 'USA'
    }
  }
};

const addFriend = (userObj, friend) => {
  let value = userObj.data.friends;
  value.push(friend);
  return value;
}

console.log(addFriend(userInfo, 'Peter'));
