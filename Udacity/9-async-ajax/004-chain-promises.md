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
* quiz: what's the problem with this code?
  ```js
  getJSON('../data/earth-like-results.json')
    .then(function(response) {
      response.results.forEach(function(url) {
        getJSON(url).then(createPlanetThumb); // you don't know when getJSON will get resolved
        // it might not be in the order it was created, so .then() after will be randomized too
      });
    })
  // => async requests can finish at any time, so there's not way to guarantee the order
  // that these thumbnails would get created
  ```

### Array methods and promises
### Quiz: promises with .forEach
### Quiz: promises with .map
### Quiz: all promises
  ```js
  Promise.all(arrayOfPromises)
    .then(function(arrayOfValues) {...})
  // arrayOfPromises and arrayOfValues are in the same order
  // this type of Promise will rejects if just 1 Promise rejects!
  // also, it will resolveds after EVERY promises resolves!
  ```

* checkout all exercise for this lesson [here](https://github.com/bunnydeviloper/exoplanet-explorer)

### Course outro
### Exoplanets 101
### Quiz: bonus question: parallel requests
