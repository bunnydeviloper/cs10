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
* 
```js
// constructor
function IceCream() { this.scoops = 0; }

// adds scoop to ice cream
IceCream.prototype.addScoop = function() {
  setTimeout(function() {
    this.scoops++; // 'this' is passed in setTimeout without a context
    console.log('scoop added!');
  }, 500);
};

const dessert = new IceCream();
dessert.addScoop();

console.log(dessert.scoops); // 0, the value of `this` is actually global object and NOT dessert object
console.log(scoops); // NaN, b/c 'undefined' + 1 is NaN

// FIX: use closure
IceCream.prototype.addScoopFix = function() {
  const cone = this; // sets `this` to the `cone` variable
  setTimeout(function() {
    cone.scoops++; // references the `cone` variable
    console.log('scoop added!');
  }, 0.5);
};

console.log(dessert.scoops); // 1
console.log(scoops); // 1


```

### Default function parameters

### Defaults and destructuring

### Quiz

### Class Preview

### JavaScript's Illusion of classes

### JavaScript classes

### Convert a function to a class

### Working with JavaScript Classes

### Super and Extends

### Extending classes from ES5 to ES6

### Working with JavaScript subclass

### Quiz

### Lesson 2 summary
