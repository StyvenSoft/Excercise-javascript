const greetAliens = arr => {
    for (let i = 0; i < arr.length; i++) {
          console.log('Oh powerful ' + arr[i] + ', we humans offer our unconditional surrender!');
    }
}

/*
// Alternate solutions:

// Using string interpolation
const greetAliens = arr
for (let i = 0; i<arr.length; i++){
  console.log(`Oh powerful ${arr[i]}, we humans offer our unconditional surrender!`);
}

// As a function declaration:
function greetAliens(arr) {
for (let i = 0; i<arr.length; i++){
  console.log(`Oh powerful ${arr[i]}, we humans offer our unconditional surrender!`);
}
}

*/

const aliens = ["Blorgous", "Glamyx", "Wegord", "SpaceKing"];

console.log(greetAliens(aliens));