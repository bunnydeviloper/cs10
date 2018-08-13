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
* 4 stages:
  1. wrapping: learning syntax of constructor promises
    * fulfilled (resolved): it worked :)
    * rejected (failed): not work
    * pending: still waiting
    * settled: something happened!
  2. thening: get value after resolution and then do an action
  3. catching: if error, do recovery
  4. chaining: create long sequences of async work

### Promise timeline
* promise can only settles once
  ```js
  new Promise(function(resolve, reject) {
    resolve('hi'); // works
    resolve('bye'); // can't happen 2nd time
  });
  ```
* promise is on the main thread and could be potentially blocking

### Quiz: Async Scenarios
* When should you consider using Promises?
  * YES - working with information from AJAX request
    ```js
    var data = get('data.json');
    data.onload = function() { analyze(this.responseText); };
    ```
  * NO - executing long running image manipulation work in the main thread, no b/c promise run in the main thread so there's nothing to gain
    `hugeArrayOfImages.forEach(function(i) {makeSepia(i); });`
  * NO - creating a series of html elements, no b/c creating independent DOM element is synchronous, so there's no need (but if it's script element then we need promise to load data/resources)
    ```js
    data.forEach(function(d) {
      var div = createDiv(d);
      body.appendChild(div);
    });
    ```
  * YES - posting messages back and forth b/w the main thread and web worker
    ```js
    var worker = new Worker('worker.js');
    worker.postMessage(data);
    worker.onmessage = doSomething;
    ```

### Syntax
* promise is a try-catch wrapper around the code, that will finsish at an unpredictable time
  ```js
  new Promise(function(resolve, reject) { // resolve and reject are callbacks
    const value = doSomething();
    if (thingWorked) {
      resolve(value);
    } else if (somethingWentWrong) {
      reject();
    }
  }).then(function(value) {
    // success!
    return nextThing(value);
  }).catch(rejectFunction);

  // NOTE: the value themselves aren't being passed to .then or .catch
  // rather, they're being passed to the functions called by .then or .catch

  // -----------
  new Promise(function(resolve, reject) {
    const img = document.createElement('img');
    img.src = 'image.jpg';
    img.onload = resolve;
    img.onerror = reject;
    document.body.appendChild(img);
  })
  .then(finishLoading);
  .catch(showAlternateImage);

  // -----------
  new Promise(function(resolve) {
    console.log('first');
    resolve();
    console.log('second');
  }).then(function() {
    console.log('third');
  });
  ```

### Quiz: Write your first promise
### Quiz: wrapping readyState
* `document.readyState` has three stages:
  1. Loading
  2. Interactive: DOM has been loaded but sub-resources like images, stylesheet have yet to load
  3. Complete

### Important! Working with Exoplane...

### Quiz: wrap and XHR
### Web technologies
### Quiz: fetch API
### What happens next?
