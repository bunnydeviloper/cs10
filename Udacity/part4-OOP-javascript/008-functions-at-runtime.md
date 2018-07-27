# Functions at Runtime

### Introduction

### First-class functions
* in JS, fns are first-class fn: you can access properties on fn and do anything. Fn can:
  1. be stored in a variables
  2. be returned from a fn
  3. be passed as arguments into another fn
* function expression VS. function declaration
* A function that returns another fn is known as **higher-order function**
  ```js
  function alertThenReturn() {
    alert('Message 1!');
    return function () { alert('Message 2!'); };
  }
  const innerFunction = alertThenReturn();
  innerFunction(); // alerts 'Message 2!'
  // another way to invoke  immediately without being stored in a variable
  alertThenReturn()(); // alerts 'Message 1!' then alerts 'Message 2!'
    ```
### Callbacks
* A fn that is passed as an argument into another fn is called a callback fn
  ```js
  function callAndAdd(n, callbackFunction) {
    return n + callbackFunction();
  }
  function returnsThree() { return 3; }
  let result = callAndAdd(2, returnsThree);
  console.log(result); // 5
  ```
* Leveraging callbacks is possible because JS fns are first-class fn
  ```js
  function each(array, callback) {
    for (let i = 0; i < array.length; i++) {
      if (callback(array[i])) { console.log(array[i]); }
    }
  }
  function isPositive(n) { return n > 0; };
  each([-2, 7, 11, -4, -10], isPositive); // 7, 11
  ```
* Array methods
  * forEach(): modifies the original array and DOES NOT return anything
    ```js
    function logIfOdd(n) { if (n % 2 !== 0) { console.log(n); } }
    logIfOdd(2); // (nothing is logged)
    logIfOdd(3); // 3

    [1, 5, 2, 4, 6, 3].forEach(logIfOdd);
    // 1
    // 5
    // 3
    ```
  * map(): returns a NEW array based on cb fn's return values
    ```js
    const names = ['David', 'Richard', 'Veronika'];
    const nameLengths = names.map(function(e) { return e.length; });
    console.log(nameLengths); // [5, 7, 8]
    ```
  * filter(): returns a new array with only elements that passed the test in cb fn
    ```js
    names.filter(function(e) { return e.length < 6; }); // ['David']
    ```

### Scope
* lexical scope: determine where a variable can be seen in some code (block scope VS fn scope)
  * variables in JS are function-scoped, any variables defined w/in blocks (`if` or `for`) are available outside that block
* runtime scope: when a fn is run, it creates a new runtime scope, represents the **context** of fn (= the set of variables available for fn to use)
* ES6 syntax: use `let` and `const` to declare block-scoped variables, replace the need for `var`
* Scope chain: local variables > parent's variables > global/window variables
* Variable shadowing: when you create a var w/ the same name as another var somewhere in scope chain
  ```js
  const symbol = '¥';
  function displayPrice(price) {
    const symbol = '$'; // variable created in the inner scope will override outer scope
    console.log(symbol + price);
  }
  displayPrice('80'); // '$80'
  console.log(symbol); // '¥'
  ```

### Closure
* Functions retain their scope
  ```js
  function remember(number) {
      return function() { return number; }
  }
  const returnedFunction = remember(5);
  console.log( returnedFunction() ); // 5
  ```
* A closure is:
  * the function itself, and
  * the code (the scope chain of) where the function is declared
    * closures allow us to store a snapshot of state at the time the fn obj is created
* every time a fn is defined, closure is created for that fn
* free variables: variables that aren't passed in as arguments nor defined locally but you have access to b/c of scope chain
  ```js
  function outerFunction() {
    let num1 = 5;
    return function(num2) { console.log(num1 + num2); };
  }
  let result = outerFunction();
  result(10); // 15
  ```
* closures can help you restrict access to varibles and create private state so no one can accidentally reset the variable nor access data externally
  ```js
  function myCounter() {
    let count = 0;
    return function () {
      count += 1;
      return count;
    };
  }
  let counter = myCounter();
  counter(); // 1
  counter(); // 2
  counter.count; // undefined
  count; // undefined
  ```
* Gabage collection: when data is no longer referable (when there is no remaining references to that data available for executable code), it is "gabage collected" and will be destroyed at some later point in time to frees up resources (computer memory) to re-use later

### Immediately-invoked Function Expression (IIFE)
* Function declaration VS function expression
  * Declarartion: doesn't require a var to be assigned to it, doesn't return a value
  * Expression: commonly assigned to var (but not needed), does return a value, can be anynomous or named
  ```js
  function sayHi() { return 'Hi!'; } // declaration

  (function sayHi() { return 'Hi!'; }) // expression
  (function sayHi() { return 'Hi!'; })() // expression, IIFE
  (function sayHi() { return 'Hi!'; }()) // expression, IIFE, alternative way to write
  (function sayHi(name) { return `Hi ${name}!`; })('Sophia') // expression, IIFE, pass argument

  const sayHi = function () { return 'Hi!'; } // expression, assigned to var, anonymous
  const sayHi = function sayHi() { return 'Hi!'; } // expression, assigned to var, named
  ```
* IIFE's and private scope (private state)
  ```js
  const myFunction = (
    function () {
      const hi = 'Hi!';
      return function () { console.log(hi); }
    }
  )();
  ```
* enclose IIFE and private scope within the event handler itself
  ```js
  button.addEventListener('click', (function() {
    // instead of global var, containing count in a closure allows retain data from each click
    let count = 0;
    return function() {
      count += 1;
      if (count === 2) {
        alert('This alert appears every other press!');
        count = 0;
      }
    };
  })());
  ```
* NOTE: IIFE is only intended to be invoked once, to create a unique execution context
* If you have one-time task (click, initializing app), an IIFE is great b/c you don't pollute your global env.
* Quiz: What is the return value? ==> return 2, delete operator only works on object's properties
  ```js
  (function(n){
    delete n;
    return n;
  })(2);
  ```

### Lesson summary
