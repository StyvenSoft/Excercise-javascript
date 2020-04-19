const _={
    clamp (number, lower, upper) {
      const lowerClampedValue = Math.max(number, lower);
      const clampedValue = Math.min(lowerClampedValue, upper);
      return clampedValue;
    },
    inRange (number, start, end) {
      if (end === undefined) {
            end = start
            start = 0
      } if (start > end) {
              let temp = end;
              end = start
              start = temp
        }
  let isInRange = start <= number && number < end 
      return isInRange
    },
    words(string) {
      const words = string.split(' ');
      return words;
    },
    pad(string, length) {
      if(string.length >= length) {
        return string;
      }
      const startPaddingLength = Math.floor((length - string.length) / 2);
      const endPaddingLength = length - string.length - startPaddingLength;
      const paddedString = ' '.repeat(startPaddingLength) + string + ' '.repeat(endPaddingLength);
      return paddedString;
    },
    has(object, key) {
      const hasValue = object[key];
      if(hasValue != undefined){
         return true;
      }
        return false;
    },
    drop(array, n){
      if(n === undefined){
        n = 1;
      }
      /* slice() devuelve una copia de una parte del array dentro de un nuevo array empezando por inicio hasta fin (fin no incluido). El array original no se modificará. */
      let droppedArray = array.slice(n, array.length);
      return droppedArray;
    },
    dropWhile(array, predicate){
        const cb = (element, index) => {
          return !predicate(element, index, array);
        };
      /*
    findIndex() devuelve el índice del primer elemento de un array que cumpla con la función de prueba proporcionada. En caso contrario devuelve -1
    */
      let dropNumber = array.findIndex(cb)
      let droppedArray = this.drop(array, dropNumber);
      return droppedArray;
    },
    chunk(array, size=1) {
      let arrayChunks = [];
      for(let i = 0; i < array.length; i += size){
        let arrayChunk = array.slice(i, i+size);
        arrayChunks.push(arrayChunk);
      }
      return arrayChunks;
    }
};
  
  //console.log(_.clamp(3, 2, 4));
  // Do not write or modify code below this line.
  module.exports = _;