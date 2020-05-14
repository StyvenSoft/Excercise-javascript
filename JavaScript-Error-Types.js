/*
SyntaxError : este error se generará cuando un error tipográfico cree un código no válido, código que 
el compilador no puede interpretar. Cuando se produce este error, escanee su código para asegurarse 
de que abrió y cerró correctamente todos los corchetes, llaves y paréntesis y que no incluyó ningún 
punto y coma no válido.

ReferenceError : este error se generará si intenta utilizar una variable que no existe. Cuando se produce 
este error, asegúrese de que todas las variables estén declaradas correctamente.

TypeError : este error se generará si intenta realizar una operación en un valor del tipo incorrecto. 
Por ejemplo, si tratamos de usar un método de cadena en un número, arrojaría un TypeError.

*/


myVariable++;
// 1 - What type of error will be thrown on the line above: ReferenceError

const myString = 42;
myString.substring(0);
// 2 - What type of error will be thrown on the line above: TypeError 

const myRandomNumber; = Math.random();
// 3 - What type of error will be thrown on the line above: SyntaxError


// Debugging Errors

/*
1 - Ejecuta tu código. Utilizando el seguimiento de la pila del primer error, identifique el tipo, 
la descripción y la ubicación del error.
2 - Vaya al nombre del archivo y al número de línea indicado por el seguimiento de la pila de errores.
Usando el tipo de error y la descripción, identifique el error en su código.
3 - Solucione el error y vuelva a ejecutar su código.
4 - Repita los pasos 1-3 hasta que su código ya no arroje ningún error.

*/

function isSumBigger(number1, number2, total {
    const sum = number1 + number2;
    
    if (numberSum > total;) {
      return true;
    } else {
      return false;
    }
}
  
  // Should return true
  console.log('isSumBigger(1, 3, 2) returns: ' + isSumBigger(1, 3, 2));
  
  // Should return false
  console.log('isSumBigger(1, 3, 5) returns: ' + isSumBigger(1, 3, 5));

  

// Solution:

function isSumBigger(number1, number2, total) {
    const numberSum = number1 + number2;
    
    if (numberSum > total) {
      return true;
    } else {
      return false;
    }
  }
  
  // Should return true
  console.log('isSumBigger(1, 3, 2) returns: ' + isSumBigger(1, 3, 2));
  
  // Should return false
  console.log('isSumBigger(1, 3, 5) returns: ' + isSumBigger(1, 3, 5));