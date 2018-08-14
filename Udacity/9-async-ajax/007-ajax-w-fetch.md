# Lesson 7: Ajax with Fetch

### Ajax call with the Fetch API
### What is Fetch
* Fetch is a new API that was built to make requesting resource (primarily across a network) a whole lot easier.
* Awesome part: Fetch is Promise-based

### Write the Fetch Request
* fetch request will return a promise
  ```js
  fetch('https://api.unsplash.com/search/photos?page=1&query=flowers', {
    headers: {
      Authorization: 'Client-ID abc123',
    }
  });

  // another way to add headers
  const requestHeaders = new Headers();
  requestHeaders.append('Authorization', 'Client-ID abc123');
  fetch('https://api.unsplash.com/search/photos?page=1&query=flowers', {
    headers: requestHeaders,
    method: 'POST', // to change method
  });
  ```
* 'GET' HTTP method is used as default for a Fetch request
* It is recommended that all methods are written in uppercase for consistency with HTTP verbs specification

### Handle the Response
* chaining to fetch:
  `fetch(...).then(function (response) { /* do sth */ });`

### The response Object
### ES6 arrow function
### Display content & handling errors
### Project wrap-up
### Fetch Outro
### Course Outro
