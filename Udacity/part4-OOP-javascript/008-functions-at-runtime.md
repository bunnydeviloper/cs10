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
  * forEach()
    ```js
    function logIfOdd(n) { if (n % 2 !== 0) { console.log(n); } }
    logIfOdd(2); // (nothing is logged)
    logIfOdd(3); // 3

    [1, 5, 2, 4, 6, 3].forEach(logIfOdd);
    // 1
    // 5
    // 3
    ```
  * map()
  * filter()

### Scope

### Closure

### Immediately-invoked Function Expression

### Lesson summary
