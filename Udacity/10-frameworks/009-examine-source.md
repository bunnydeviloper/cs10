# Lesson 9: Examine a framework's source

### A Framework's base features
### What is a template?
* template give you a starting point, with default structure and content, then you add more colors to it

### Backbone Project Setup
* github repo: backbone and backbone-server
* to run the server, cd into backbone-server/binaries, then type:
  * `./server_darwin_amd64 -www=../../backbone`
  * open http://localhost:8000

### Underscore templates
* id for script tag
* delimiters: sequence of 1+ characters, used to form a boundary
  * usually used to separate html from JS
* to see content of something in the console:
  * `var result = _.template($('#menuItem-template').html(), {variable: 'menuItem'})
  * `result.source`

### Constructor Function
* Example 1:
  ```js
  // creating a function using Function literals (or object literals, or array literals)
  var adder1 = function(num1, num2) {
    return num1 + num2;
  };

  // same as creating constructor function like this (or object constructor, or array constructor):
  // constructor may not be readable, harder to work with, and slower
  // but it can dynamically create a function at runtime
  var adder2 = new Function('num1', 'num2', 'return num1 + num2');
  // the last argument is the body of the function, all args before that is parameters
  ```
* Example 2:
  ```js
  function make(adjective) {
    return new Function('noun', 'return noun[0].toUpperCase() + noun.slice(1) + " is " + adjective + "!");
  }
  var isFun = make('fun');
  isFun('biking'); // 'Biking is fun!'
  isFun('swimming'); // 'Swimmng is fun!'
  ```

### Quiz: Constructor function Quiz
### Walk-thru the 'template' function
### Filling the template with data
### Interview with Scott
### Template 'variables' and JS's 'with'
### Quiz: Template Bug Quiz
### Quiz: Build your own templating function quiz
### adEventListener
### Setting up Backbone Events
### Walk-thru backbone's 'Events.on'
### Quiz: Adding events quiz
### Walk-thru Backbone's 'Events.trigger'
### Quiz: Events quiz
### Quiz: build your own event system quiz
### A router and the Backbone.history object
### Quiz: routing quiz
### hashchange & pushState
### stepping thru Backbone.history.start()
### Quiz: Backbone's fragment count quiz
### Quiz: lesson highlight summary quiz
### Outro
