// example Filter()
let arrOfNums = [2, 18, 42, 31, 17, 90, 5];

const isNumGreaterThanTwenty = num => {
  return num > 20; 
}

let arrOfNumsGreaterThanTwenty = arrOfNums.filter(isNumGreaterThanTwenty); //the arrOfNumsGreaterThanTwenty variable is assigned a newly created array filled with the elements from arrOfNums that pass the test provided by isNumGreaterThanTwenty

console.log(arrOfNumsGreaterThanTwenty);

// Example:
const justCoolStuff = (arr1, arr2) => 
arr1.filter(word => arr2.includes(word));
/*
// As a function declaration AND using named function w/ a loop:
function justCoolStuff(firstArray, secondArray) {
      function isInSecondArray(item){
            for(let i = 0; i<secondArray.length; i++){
                  if (secondArray[i] === item){
                        return true
                  }
            }
            return false 
      }
      return firstArray.filter(isInSecondArray)
}
*/
  const coolStuff = ['gameboys', 'skateboards', 'backwards hats', 'fruit-by-the-foot', 'pogs', 'my room', 'temporary tattoos'];
  
  const myStuff = [ 'rules', 'fruit-by-the-foot', 'wedgies', 'sweaters', 'skateboards', 'family-night', 'my room', 'braces', 'the information superhighway']; 
  
  console.log(justCoolStuff(myStuff, coolStuff))
  
  // Feel free to uncomment the code below to test your function
  /*
  
  
  // Should print [ 'fruit-by-the-foot', 'skateboards', 'my room' ]
  
  */