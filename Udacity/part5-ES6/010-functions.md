# Lesson 10 - Functions

### Updates to functions

### Arrow Functions
* arrow functions are ALWAYS expressions, in fact, they are arrow function expressions
* if there are 0, 2, or more items in parameter list, you need ()
* alternatively, if there's no parameters, you can also use underscore `_`
* concise body syntax: no curly braces and automatically returns the expression (one liner)
* block body syntax: uses curly braces and needs a `return` statement
  ```js
  const upperizedNames = ['Farrin', 'Kagure', 'Asser'].map(function(name) { return name.toUpperCase(); });
  const upperizedNames = ['Farrin', 'Kagure', 'Asser'].map( name => name.toUpperCase());
  const sayHi = () => console.log('Hello there!');
  const greetings = (name1, name2) => console.log(`Hi ${name1}, hi ${name2}.`);
  ```

### Using arrow funcitons
### Quiz: convert fn into an arrow fn
### Arrow functions recap
### Arrow functions and the `this` keyword

### `this` and regular functions
* the value of `this` can be any of the following:
  1. A new object (if the fn is called with `new`)
  2. A specified object (if the fn is invoked with `call`/`apply`)
  3. A context object (if the fn is a method of an object)
  4. The global object or undefined (if the fn is called with no context)

### `this` and arrow functions
* With regular fn: the value of `this` is set based on *how the fn is called*
* With arrow fn: the value of `this` is based on the *function's surrounding context*
  * which means the value of `this` inside the => fn is the same as outside the => fn
* Example:
  ```js
  // constructor
  function IceCream() { this.scoops = 0; }

  // adds scoop to ice cream
  IceCream.prototype.addScoop = function() {
    setTimeout(function() {
      this.scoops++; // 'this' is passed in setTimeout without a context
      console.log('5th log: ', this.scoops); // NaN, b/c 'undefined' + 1 is NaN
      console.log('6th log: scoop cannot be added!');
    }, 500);
  };

  const dessert = new IceCream();
  dessert.addScoop();

  console.log('1st log: ', dessert.scoops); // 0, always 0 b/c async, will be diff if u run in steps (dev tool)

  // FIX: use closure
  IceCream.prototype.fixAddScoop = function() {
    const cone = this; // sets `this` to the `cone` variable
    setTimeout(function() {
      cone.scoops++; // references the `cone` variable
      console.log('3rd log: ', cone.scoops); // 1
      console.log('4th log: first scoop added!');
    }, 0.5);
  };

  dessert.fixAddScoop();
  console.log('2nd log: ', dessert.scoops); // 0, always 0 b/c async, will be 1 if u run in steps (dev tool)

  // FIX: use arrow function
  // note: CANNOT use arrow fn on the arrowAddScoop method b/c the value of 'this' will become global object
  IceCream.prototype.arrowAddScoop = function() {
    setTimeout(() => { // arrow fn uses surrounding context to determine what 'this' referes to
      this.scoops++; // since 'this' outside the => fn refers to 'dessert', hence 'this' inside the => fn will be same
      console.log('7th log: ', this.scoops); // 2, now it's kept the context
      console.log('8th log: second scoop added!');
    }, 500);
  };

  dessert.arrowAddScoop();
  console.log('8nd log: ', dessert.scoops); // 0, always 0 b/c async, will be 2 if u run in steps (dev tool)
  ```

### Default function parameters
* default fn parameters: use as arguments if none provided
  ```js
  function greet(name = 'Student', greeting = 'Welcome') {
    return `${greeting} ${name}!`;
  }

  greet(); // Welcome Student!
  greet('James'); // Welcome James!
  greet('Richard', 'Howdy'); // Howdy Richard!
  ```

### Defaults and destructuring
* combine default fn parameters with destructuring
  ```js
  function createGrid([width = 5, height = 5]) { return `Generates a ${width} x ${height} grid`; }
  createGrid([]); // Generates a 5 x 5 grid
  createGrid([2]); // Generates a 2 x 5 grid
  createGrid([2, 3]); // Generates a 2 x 3 grid
  createGrid([undefined, 3]); // Generates a 5 x 3 grid

  // createGrid(); // ERROR!
  function createGrid2([width = 5, height = 5] = []) { return `Generates a ${width} x ${height} grid`; }
  createGrid2(); // WORKS!, leverage the use of default parameters

  function house([houseColor = 'green', shutterColors = ['red']]) {
    return `I have a ${houseColor} house with ${shutterColors.join(' and ')} shutters`;
  }
  // house('red', []); // not work, since house() only expect 1 parameter
  house(['green', ['white', 'pink']]); // I have a green house with white and pink shutters
  // house(['blue', 'purple']); // not work, since the 2nd param uses .join() and can only be used on array
  house(['blue']); // I have a blue house with red shutters
  house([undefined, ['orange']]); // I have a green house with orange shutters // notice skipped 1st param
  ```
* defaults and destructuring objects
  ```js
  function createSundae({scoops = 1, toppings = ['Hot Fudge']}) { // notice using = instead of :
    const scoopText = scoops === 1 ? 'scoop' : 'scoops';
    return `Your sundae has ${scoops} ${scoopText} with ${toppings.join(' and ')} toppings.`;
  }

  createSundae({}); // Your sundae has 1 scoop with Hot Fudge toppings.
  createSundae({scoops: 2}); // Your sundae has 2 scoops with Hot Fudge toppings.
  createSundae({scoops: 2, toppings: ['Sprinkles']}); // Your sundae has 2 scoops with Sprinkles toppings.
  createSundae({toppings: ['Cookie Dough']}); // Your sundae has 1 scoop with Cookie Dough toppings.

  // createSundae(); // ERROR!
  // you can fix the issue by providing a default object to the function
  // function createSundae({scoops = 1, toppings = ['Hot Fudge']} = {}) {
  // createSundae(); // Your sundae has 1 scoop with Hot Fudge toppings.
  // createSundae({}); // this will also works
  // createSundae({ toppings: ['Sprinkles', 'Caramel']}); // skipped first arg, and still works
  ```
* one benefit of object defaults over array defaults is how they handle skipped options
  * array: have to pass `undefined` to "skip" over the 1st arg (& accept default)
  * object: just need to specify the key
  * => better to use object with destructuring

### Quiz
