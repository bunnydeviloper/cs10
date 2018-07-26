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

  return function () {
    alert('Message 2!');
  };
}
const innerFunction = alertThenReturn();
innerFunction(); // alerts 'Message 2!'
  ```

### Callbacks

### Scope

### Closure

### Immediately-invoked Function Expression

### Lesson summary
