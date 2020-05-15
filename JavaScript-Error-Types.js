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




  // Finding Documentation

  /*
  Los documentos web MDN JavaScript son un recurso poderoso, pero pueden ser 
  abrumadores porque cubren mucha información
  */

  // función que se supone que toma una cadena y devuelve una versión de esa cadena repetida dos veces. 

// Link to String.repeat() documentation: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat
function doubleString(string) {
    return string.repeat(2);
  }
  
  // Should return 'echoecho'
  console.log("doubleString('echo') returns: " + doubleString('echo'));



/** Toma una cadena y comprueba si esa cadena contiene la subcadena 'cake'dentro de ella. 
 * Si es así, debería volver true. Si no, debería volver false. */


// Returns whether or not the provided string contains a substring of "cake" in it.
const containsCake = string => string.includes('cake');

// Should return true
console.log("containsCake('I think cake is my soul mate.') returns: " + containsCake('I think cake is my soul mate.'));

// Should return false
console.log("containsCake('Pie is certainly the coolest dessert.') returns: " + containsCake('Pie is certainly the coolest dessert.'));

// Example 
/**
 * El primero verifica si la cadena 'Dog'está en el rango de longitud de 2y 4. En este caso, la función 
 * debería regresar trueporque la longitud de la cadena es la 3que está entre esos dos valores.
 *  Los siguientes dos ejemplos fallan. El primero falla porque la cadena es demasiado larga. 
 * El segundo falla porque la cadena es demasiado corta.
 * 
*/

function isStringPerfectLength(string, minLength, maxLength) {
    const stringLength = string.length;
    
    if (stringLength < minLength) {
      return false;
    } else if (stringLength > maxLength) {
      return false;
    } else {
      return true;
    }
  }
  
  // Should return true
  console.log("isStringPerfectLength('Dog', 2, 4) returns: " + isStringPerfectLength('Dog', 2, 4));
  
  // Should return false
  console.log("isStringPerfectLength('Mouse', 2, 4) returns: " + isStringPerfectLength('Mouse', 2, 4));
  
  // Should return false
  console.log("isStringPerfectLength('Cat', 4, 9) returns: " + isStringPerfectLength('Cat', 4, 9));


// Runtime Errors

// Cuando ejecutamos código y una línea de código arroja un error, ese error se denomina error de tiempo de ejecución 

// tenemos una función throwError()que arrojará a ReferenceError. 

console.log('This message will be printed to the console.');

function throwError () {
  return notDefinedVar;
}

// Call throwError() below:
throwError();

console.log('Because of the error, this will not printed!');

// Constructing an Error

/**
 * Usar la Errorfunción para crear nuestro propio objeto de 
 * error con un mensaje que sea exclusivo de nuestro programa!
 */

console.log(Error('Your password is too weak.'));
// Prints: Error: Your password is too weak.

console.log(new Error('Your password is too weak.'));
// Prints: Error: Your password is too weak.


// Other example

// Write your code below:
console.log(Error('User missing name'));
console.log('Will logging the error stop our program from running?');


// The throw Keyword

/**
 * Crear un error no hace que nuestro programa se detenga; recuerde, se debe lanzar 
 * un error para detener el programa.
 */

// Para arrojar un error en JavaScript, usamos la throwpalabra clave así:

throw new Error('Something wrong happened');
// Error: Something wrong happened

throw Error('Username or password do not match');
// Error: Something wrong happened

console.log('This will never run');


// The try...catch Statement

/**
 * los errores arrojados han causado que nuestro programa deje de ejecutarse. 
 * Pero, tenemos la capacidad de anticipar y manejar estos errores al escribir código 
 * para abordar el error y permitir que nuestro programa continúe ejecutándose.
 */

 // try...catchdeclaraciones para anticipar y manejar errores.

 try {
  throw Error('This error will get caught');
} catch (e) {
  console.log(e);
}
// Prints: This error will get caught

console.log('The thrown error that was caught in the try...catch statement!');
// Prints: 'The thrown error that was caught in the try...catch statement!'


// Handling with try...catch

const someVar = 'Cannot be reassigned';
try {
  someVar = 'Still going to try';
} catch(e) {
  console.log(e);
}
// Prints: TypeError: Assignment to constant variable.

// Example

function capAllElements(arr){
	try{
    arr.forEach((el, index, array) => {
    array[index] = el.toUpperCase();
    });
  } catch(e) {
    console.log(e)
  }
}

capAllElements('Incorrect argument');