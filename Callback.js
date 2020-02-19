const booksDB = [
  {
    id : 1,
    title : "Clean code"
  },
  {
    id : 2,
    title : "The pracmatic programmer"
  },
  {
    id : 3,
    title : "Web development with Node.js"
  }
];

// método find() devuelve el valor del primer elemento del array que cumple la función de prueba proporcionada

function getBookById(id, callback) {
  const book = booksDB.find((book) => book.id === id)
  if (!book) {
    const error = new Error();
    error.message = "Book no found!";
    return callback(error);
  }
  callback(null, book);
}

getBookById(2, (err, book) => {
  if (err) {
    return console.log(err.message);
  } else {
    return console.log(book);
  }
})


const authorDB = [
  {
    id : 1,
    name : "Robert C. Martin"
  },
  {
    id : 2,
    name : "Steve Forest"
  },
  {
    id : 3,
    name : "Arnol Betts"
  }
];

function getAuthorById(id, callback){
  const author = authorDB.find((author) => author.id === id);
  if (!author) {
    const error = new Error();
    error.message = "Author no found!";
    return callback(error);
  }
  callback(null, author);
}

getAuthorById(4, (err, author) => {
  if (err) {
    return console.log(err.message);
  } else {
    return console.log(author);
  }
})
