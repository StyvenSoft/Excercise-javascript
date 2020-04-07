const convertToBaby = arr => {
    let convert = [];
    for (let i = 0; i < arr.length; i++) {
      convert.push(`baby ${arr[i]}`);
    }
    return convert;
  }
   
  // When you're ready to test your code, uncomment the below and run:
  
const animals = ['panda', 'turtle', 'giraffe', 'hippo', 'sloth', 'human'];

console.log(convertToBaby(animals));