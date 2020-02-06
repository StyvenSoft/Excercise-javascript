// sumar todos los números en un rango

function sumAll(arr) {
    let max = Math.max(arr[0], arr[1]),
        min = Math.min(arr[0], arr[1]),
        result = 0;
    for (let i = min; i <= max; i++) {
      result += i;
    }
    return result;
  }
  
  sumAll([1, 4]);

  // diferir dos matrices
// devolver la diferencia simétrica de las dos matrices


function diffArray(arr1, arr2) {

  var newArr = [];
  
  var newConcat = arr1.concat(arr2);
  
  for (var i = 0; i < newConcat.length; i++) {
    if (arr1.indexOf(newConcat[i]) === -1 || arr2.indexOf(newConcat[i]) === -1) {
     newArr.push(newConcat[i]);
    }
  }
  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
