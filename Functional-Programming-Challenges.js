// usando el método reduce para analizar datos


// Devolver toda la suma de todas las edades de los usuarios
const users = [
  { name: 'John', age: 34 },
  { name: 'Amy', age: 20 },
  { name: 'camperCat', age: 10 }
];

const sumOfAges = users.reduce((sum, user) => sum + user.age, 0);
console.log(sumOfAges); // 64

// devolver un objeto que contiene los nombres de los usuarios como propiedades con sus edades como valores

const usersList = [
  { name: 'John', age: 34 },
  { name: 'Amy', age: 20 },
  { name: 'camperCat', age: 10 }
];

const usersObj = usersList.reduce((obj, userList) => {
  obj[userList.name] = userList.age;
  return obj;
}, {});
console.log(usersObj); // { John: 34, Amy: 20, camperCat: 10 }

// Excercise methops FILTER , MAP, REDUCE

var watchList = [
  {
    "Title": "Inception",
    "Year": "2010",
    "Rated": "PG-13",
    "Released": "16 Jul 2010",
    "Runtime": "148 min",
    "Genre": "Action, Adventure, Crime",
    "Director": "Christopher Nolan",
    "Writer": "Christopher Nolan",
    "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page, Tom Hardy",
    "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
    "Language": "English, Japanese, French",
    "Country": "USA, UK",
    "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    "Metascore": "74",
    "imdbRating": "8.8",
    "imdbVotes": "1,446,708",
    "imdbID": "tt1375666",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "Interstellar",
    "Year": "2014",
    "Rated": "PG-13",
    "Released": "07 Nov 2014",
    "Runtime": "169 min",
    "Genre": "Adventure, Drama, Sci-Fi",
    "Director": "Christopher Nolan",
    "Writer": "Jonathan Nolan, Christopher Nolan",
    "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
    "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    "Language": "English",
    "Country": "USA, UK",
    "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
    "Metascore": "74",
    "imdbRating": "8.6",
    "imdbVotes": "910,366",
    "imdbID": "tt0816692",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "The Dark Knight",
    "Year": "2008",
    "Rated": "PG-13",
    "Released": "18 Jul 2008",
    "Runtime": "152 min",
    "Genre": "Action, Adventure, Crime",
    "Director": "Christopher Nolan",
    "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
    "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
    "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
    "Language": "English, Mandarin",
    "Country": "USA, UK",
    "Awards": "Won 2 Oscars. Another 146 wins & 142 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
    "Metascore": "82",
    "imdbRating": "9.0",
    "imdbVotes": "1,652,832",
    "imdbID": "tt0468569",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "Batman Begins",
    "Year": "2005",
    "Rated": "PG-13",
    "Released": "15 Jun 2005",
    "Runtime": "140 min",
    "Genre": "Action, Adventure",
    "Director": "Christopher Nolan",
    "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
    "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
    "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
    "Language": "English, Urdu, Mandarin",
    "Country": "USA, UK",
    "Awards": "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
    "Metascore": "70",
    "imdbRating": "8.3",
    "imdbVotes": "972,584",
    "imdbID": "tt0372784",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "Avatar",
    "Year": "2009",
    "Rated": "PG-13",
    "Released": "18 Dec 2009",
    "Runtime": "162 min",
    "Genre": "Action, Adventure, Fantasy",
    "Director": "James Cameron",
    "Writer": "James Cameron",
    "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
    "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
    "Language": "English, Spanish",
    "Country": "USA, UK",
    "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
    "Metascore": "83",
    "imdbRating": "7.9",
    "imdbVotes": "876,575",
    "imdbID": "tt0499549",
    "Type": "movie",
    "Response": "True"
  }
];

function getRating(watchList){
  // Add your code below this line
   var averageRating =
  watchList
    // Usa el filter para encontrar películas dirigidas por Christopher Nolan
    .filter(film => film.Director === "Christopher Nolan")
    // Use el map para convertir sus calificaciones de cadenas a números
    .map(film => Number(film.imdbRating))
    // Use reduce para sumar sus calificaciones
    .reduce((sumOfRatings, rating) => sumOfRatings + rating) /
  // Divide por la cantidad de películas de Nolan para obtener la calificación promedio
  watchList.filter(film => film.Director === "Christopher Nolan").length;

  return averageRating;
}
console.log(getRating(watchList));


// use un MAP, FILTER o REDUCE funciones de orden superior para resolver un problema complejo

const squareList = arr =>
  arr
    .filter(num => num > 0 && num % parseInt(num) === 0)
    .map(num => Math.pow(num, 2));

// test your code
const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);

// ordenar una matriz alfabéticamente usando el método sort()

function ascendingOrder(arr) {
  return arr.sort(function(a, b) {
    return a - b;
  });
}
ascendingOrder([1, 5, 2, 3, 4]);
// Returns [1, 2, 3, 4, 5]

function reverseAlpha(arr) {
  return arr.sort(function(a, b) {
    return a === b ? 0 : a < b ? 1 : -1;
  });
}
reverseAlpha(['l', 'h', 'z', 'b', 's']);
// Returns ['z', 's', 'l', 'h', 'b']

// ornedar alfabéticamente array

function alphabeticalOrder(arr) {

    return arr.sort(function(a, b) {
    return a === b ? 0 : a < b ? -1 : 1;
  });

}
alphabeticalOrder(["a", "d", "c", "a", "z", "g"]);

// devolviendo una matriz ordenada sin cambiar la matriz original

// El método sort() muta la matriz original


var globalArray = [5, 6, 3, 2, 9];
function nonMutatingSort(arr) {

   return [].concat(arr).sort(function(a, b) {
    return a - b;
  });

}
nonMutatingSort(globalArray);

// dividir una cadena en una matriz utilizando el método de división

function splitify(str) {

  return str.split(/\W/);
}
splitify("Hello World,I-am code");

// combinar una matriz en una cadena utilizando el método de unión

var arr = ["Hello", "World"];
var str = arr.join(" ");
// Sets str to "Hello World"

// aplique la programación funcional para convertir cadenas en slugs de URL

var globalTitle = "Winter Is Coming";

function urlSlug(title) {
  return title
    .split(/\W/)
    .filter(obj => {
      return obj !== "";
    })
    .join("-")
    .toLowerCase();
}

var winterComing = urlSlug(globalTitle);

// use todos los métodos para verificar que cada elemento en una matriz cumpla con un criterio

var numbers = [1, 5, 8, 0, 10, 11];
numbers.every(function(currentValue) {
  return currentValue < 10;
});
// Returns false

function checkPositive(arr) {
  return arr.every(val => val > 0);
}
checkPositive([1, 2, 3, -4, 5]);


//  utilizando el método some() para verificar que cualquier elemento de una matriz cumpla con un criterio


var numbers = [10, 50, 8, 220, 110, 11];
numbers.some(function(currentValue) {
  return currentValue < 10;
});
// Returns true


function checkPositive(arr) {
  return arr.some(value => value > 0)

}
checkPositive([1, 2, 3, -4, 5]);


// introducción al currying y aplicación parcial

//Un-curried function
function unCurried(x, y) {
  return x + y;
}

//Curried function
function curried(x) {
  return function(y) {
    return x + y;
  }
}
//Alternative using ES6
const curriedTwo = x => y => x + y

curriedTwo(1)(2) // Returns 3

//  ejemplo usando la función curry en el ejemplo anterior

// Call a curried function in parts:
var funcForY = curried(1);
console.log(funcForY(2)); // Prints 3


//Impartial function
function impartial(x, y, z) {
  return x + y + z;
}
var partialFn = impartial.bind(this, 1, 2);
partialFn(10); // Returns 13

// ejemplo añadiendo 3 parametros

function add(x) {
  // Add your code below this line
  return function(y) {
    return function(z) {
      return x + y + z;
    };
  };
  // Add your code above this line
}
add(10)(20)(30);

function myReplace(str, before, after) {

if (before[0] === before[0].toUpperCase()) {
    after = after[0].toUpperCase() + after.slice(1);
}
str = str.replace(before, after);
return str;
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");


function pairElement(str) {
  const mapping = {'A': 'T', 'T': 'A', 'C': 'G', 'G': 'C'};
  return str.split('').map(item => [item, mapping[item]]);
}

pairElement("GCG");

function fearNotLetter(str) {
  var codePoints = str.split("").map(function(char, index) {
    return str.charCodeAt(index);
  });

  for (var i = 1; i < codePoints.length; i++) {
    if (codePoints[i-1] !== codePoints[i]-1) {
      return String.fromCharCode(codePoints[i]-1);
    }
  }

  return undefined;
}

fearNotLetter("abce");

function uniteUnique(...arr) {
          return arr.reduce(function(all,item){
             return all.concat(item).filter(function(el,index,self){
                 return index == self.indexOf(el);
             });
          });
        }

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
