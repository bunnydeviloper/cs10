# Lesson 6: Ajax with jQuery

### The jQuery Library & Ajax
### jQuery's `ajax()` Method
* Configuration object: a JS object that's used to configure the ajax request

### Handling the returned data
  ```js
  function handleResponse(data) {
    console.log('the ajax request has finished!');
    console.log(data);
  }
  $.ajax({
    url: 'https://swapi.co/api/people/1/'
  }).done(handleResponse);
  ```

### Cleaning up the success callback
### Code Walkthrough
### Peek inside $.ajax()
### Review the call stack
* use breakpoints in chrome Dev Tool

### Walkthrough of .ajaxTransport
* jQuery's ajax method does a lot of things under the hood:
  * creates a new XHR object each time it's called
  * sets all of the XHR properties and methods, use a for...in loop to loop through request headers
  * sends the XHR request

### jQuery's Other Async Methods
* .get(), .getJSON(), .getScript(), .post(), .load()
* these are called 'convenient methods' b/c they provide a convenient interface and do some default configuration of the request before call .ajax()
* NOTE: it's often considered good practive to use the $.ajax() method over the jQuery provided convenience methods

### Async with jQuery Outro
