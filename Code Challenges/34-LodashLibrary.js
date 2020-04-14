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
    }
};
  
  //console.log(_.clamp(3, 2, 4));
  // Do not write or modify code below this line.
  module.exports = _;