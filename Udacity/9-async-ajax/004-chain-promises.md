# Lesson 4: chaining promises

### Quiz: fetch and show first planet
### Error handling strategies
* we normally use error handling with .catch(), but...
  ```js
  get('example.json').then(resolveFunc).catch(rejectFunc); // same as...
  get('example.json').then(resolveFunc).then(undefined, rejectFunc);
  ```
* resolve does not always mean success

### Quiz: chained thenables
* If errors occur on these lines, what numbers will be logged?
  ```js
  var urls = [];
  async('example.json') // if error here: log '1 3'
  .then (function(data) {
        urls = data.urls; // if error here: log '1 3'
        return async(urls[0]);
      })
  .then(undefined, function(e) {
        console.log(1);
        return recovery();
      })
  .catch(function(e) {
        console.log(2);
        return recovery(); // if error here: log nothing
      })
  .then(function() {
        console.log(3);
        return async(urls[1]); // if error here: log 4
      })
  .then(async, function(e) {
        console.log(4);
        ahhhIGiveUp();
      });
  ```
* if something goes wrong, the next reject function will get call, and it move on with the chain

### Quiz: series vs parallel requests
* actions in series: occurs one after another (synchronous or asynchronous)
* actions in parallel: occurs at the same time (asynchronous)


### Array methods and promises

### Quiz: promises with .forEach
### Quiz: promises with .map
### Quiz: all promises
### Course outro
### Exoplanets 101
### Quiz: bonus question: parallel request...
