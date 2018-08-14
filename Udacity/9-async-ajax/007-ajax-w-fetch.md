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
  ```js
  fetch(`https://api.unsplash.com/search/photos?page=1&query=${searchedForText}`, {
    headers: {
        Authorization: 'Client-ID abc123'
    }
  }).then(function(response) {
    // since we know the response is a JSON object, we just need to call .json on the response
    // if it's an image, we extract the image body from the response with response.blob()
    return response.json();
    // .json() response a Promise, so we need to chain another .then() to get and use the returned data
  }).then(addImage);

  function addImage(data) {
      debugger;
  }
  ```

### ES6 arrow function
* eg: `fetch(...).then(response => response.json()).then(addImage);`

### Display content & handling errors
* chain .catch() to handle errors
* check [course-ajax](https://github.com/bunnydeviloper/course-ajax) repo for example

### Project wrap-up
### Fetch Outro
### Course Outro
