# Lesson 3: creating promises

### Course Introduction
### Callbacks vs promises
* The Promise object is used for deferred and asynchronous computations - MDN
* Async: things happen not on a straight timeline
  * also: sometimes things fail to execute (eg: network request)

### Callbacks vs thens
* how do you handle errors? (network errors and JS error (undefined))
* how do you create a sequence of work?
  * pyramid of doom! = nasty nested cb within cb within cb
  ```js
  // code for example
  function loadImage(src, parent, callback) {
    var img = document.createElement('img');
    img.src = src;
    img.onload = callback;
    parent.appendingChild(img);
  };

  // using promises and .then
  var sequence = get('example.json')
  .then(doSomething);
  .then(doSomethingElse);
  ```

### Course Map
### Promise timeline
### Quiz: Async Scenarios
### Syntax
### Quiz: Write your first promise
### Quiz: wrapping readyState
### Important! Working with Exoplane...
### Quiz: wrap and XHR
### Web technologies
### Quiz: fetch API
### What happens next?
