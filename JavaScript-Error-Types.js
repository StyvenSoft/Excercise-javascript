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

  // Locating Silent Bugs

  /*
  Puede encontrar que su código devuelve valores incorrectos de manera consistente sin arrojar ningún error. 
  La falta de errores arrojados no significa que la lógica de su código sea completamente correcta.

  */

 function capitalizeASingleWord(word) {
    //  console.log(word);
      if (word.match(' ')) {
        console.log(word);
        return null;
      }
      
      let firstLetter = word.charAt(0);
      const restOfWord = word.slice(1);
      
      firstLetter = firstLetter.toUpperCase();
      
      return firstLetter + restOfWord;
    }
    
    // Should return "Hey"
    console.log("capitalizeASingleWord('hey') returns: " + capitalizeASingleWord('hey'));


// Debugging with console.log() 

/*
1 - Vaya al comienzo del código de mal funcionamiento. Imprima todas las variables iniciales, 
valores existentes y argumentos utilizando console.log(). Si los valores son lo que espera, pase a 
la siguiente lógica del código. Si no, ha identificado un error y debe pasar al paso 3.

2 - Después de la siguiente pieza de lógica en su código, agregue console.log()declaraciones para
 asegurarse de que las variables actualizadas tengan los valores que ahora espera y que el bloque de
  código se esté ejecutando. Si esa lógica se está ejecutando correctamente, continúe repitiendo este 
  paso hasta que encuentre que una línea no funciona como se esperaba, luego vaya al paso 3.

3 - Solucione el error identificado y vuelva a ejecutar su código. Si ahora funciona como 
se esperaba, ¡ha terminado de depurar! De lo contrario, continúe recorriendo su código utilizando
el paso 2 hasta que lo haga.

*/
 
// Returns the string whose first letter is later in the alphabet. 
// If both first letters are equal, returns null.

function getLaterFirstLetter(string1, string2) {
    const firstLetter1 = string1.charAt(0);
    const firstLetter2 = string2.charAt(0);
    console.log(firstLetter1);
    console.log(firstLetter2);
    if (firstLetter1 === firstLetter2) {
      return null;
    } else if (firstLetter1 < firstLetter2) {
      return string2;
    } else {
      return string1;
    }
  }
  
  // Should return "blueberry"
  console.log("getLaterFirstLetter('avocado', 'blueberry') returns: " + getLaterFirstLetter('avocado', 'blueberry'));
  
  // Should return "zebra"
  console.log("getLaterFirstLetter('zebra', 'aardvark') returns : " + getLaterFirstLetter('zebra', 'aardvark'));
  
  // Should return null
  console.log("getLaterFirstLetter('astro', 'afar') returns: " + getLaterFirstLetter('astro', 'afar'));