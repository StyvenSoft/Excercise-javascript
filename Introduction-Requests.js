// HTTP Requests

// bucle de eventos

console.log('First message!');
setTimeout(() => {
   console.log('This message will always run last...');
}, 2500);
console.log('Second message!');

// XHR GET Requests

// example URL endpoint
// solicitud AJAX utilizando un objeto XHR.

const xhr = new XMLHttpRequest();
const url = 'https://api-to-call.com/endpoint';

xhr.responseType = 'json';
xhr.onreadystatechange = () => {
  if (xhr.readyState === XMLHttpRequest.DONE) {
    return xhr.response;
  }
}

xhr.open('GET', url);
xhr.send();

// Example Datamuse API

// Information to reach API
const url = 'https://api.datamuse.com/words?';
const queryParams = 'rel_rhy=';
// Selecting page elements
const inputField = document.querySelector('#input');
const submit = document.querySelector('#submit');
const responseField = document.querySelector('#responseField');

// AJAX function
const getSuggestions = () => {
const wordQuery = inputField.value;
const endpoint = (`${url} + ${queryParams} + ${wordQuery}`);
  const xhr = new XMLHttpRequest();
  xhr.responseType = 'json';
  xhr.onreadystatechange = () => {
  // Event handler code
    if (xhr.readyState === XMLHttpRequest.DONE) {
      renderResponse(xhr.response)
    }
  }

  xhr.open('GET', endpoint);
  xhr.send();
}

// Clear previous results and display results to webpage
const displaySuggestions = (event) => {
  event.preventDefault();
  while(responseField.firstChild){
    responseField.removeChild(responseField.firstChild);
  };
  getSuggestions();
}

submit.addEventListener('click', displaySuggestions);
