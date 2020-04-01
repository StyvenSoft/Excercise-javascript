let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

// El método pop() elimina el último elemento de un array y lo devuelve
console.log(secretMessage.pop());

// La propiedad length especifica el número de argumentos esperados por la función.
console.log(secretMessage.length);

// El método push() añade uno o más elementos al final de un array y devuelve la nueva longitud del array.
secretMessage.push('to', 'Program');

// reemplazar un elemento de matriz accediendo al índice
secretMessage[7] = 'right';

// El shift()método elimina el primer elemento de una matriz y devuelve ese elemento eliminado
console.log(secretMessage.shift());

// El unshift()método agrega uno o más elementos al comienzo de una matriz y devuelve la nueva longitud de la matriz.
secretMessage.unshift('Programming');

// El método splice() cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos.
secretMessage.splice(6, 5, 'know,');

// El join()método crea y devuelve una nueva cadena concatenando todos los elementos en una matriz
console.log(secretMessage.join(' '));
