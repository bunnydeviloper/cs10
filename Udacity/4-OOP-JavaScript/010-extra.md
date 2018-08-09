# Lesson 4: Object oriented design patterns

### Introduction
### Mixin/ Extending Object Functionality
* Mixin is a technique that takes the properties and methods from one object and copies them over to another object (not meant to be added to the prototype chain)
* Object.assign(): is a method that copies an object's own (non-inherited) properties from one or more source objects into a target object, then returns the updated target object. In other words, Object.assign() adds to the target object by merging in the source object(s).
* Example 1
  ```js
  let target = {};
  let source = { number: 7 };
  Object.assign(target, source);
  console.log(target); // { number: 7 }
  ```
* Example 2
  ```js
  let target = { letter: 'a', number: 11 };
  let source = { number: 7 };
  Object.assign(target, source);
  console.log(target); // { letter: 'a', number: 7 } // note: the existing value in target (number) was overwritten
  ```
* Multiple Source Objects
  ```js
  const duck = { hasBill: true, feet: 'orange' };
  const beaver = { hasTail: true };
  const otter = { hasFur: true, feet: 'webbed' };
  const platypus = Object.assign({}, duck, beaver, otter); // merge all together, note, order matters
  console.log(platypus); // { hasBill: true, hasTail: true, hasFur: true, feet: 'webbed' }

  const another = Object.assign(duck, beaver, otter);
  console.log(another); // { hasBill: true, hasTail: true, hasFur: true, feet: 'webbed' }
  console.log(duck); // { hasBill: true, hasTail: true, hasFur: true, feet: 'webbed' }
  // duck and another now points to the same object, hence another === duck
  ```
* It is important to note that the platypus object is not prototype-linked to the three other objects! That is, platypus doesn't exist in any of the three source objects' prototype chains, and vice versa:
  ```js
  platypus.constructor; // Object()
  platypus.isPrototypeOf(duck); // false
  duck.isPrototypeOf(platypus); // false
  platypus.isPrototypeOf(beaver); // false
  beaver.isPrototypeOf(duck); // false
  platypus.isPrototypeOf(otter); // false
  otter.isPrototypeOf(platypus); // false
  ```
* Important: mixins don't set up the prototype chain, but only extend data and functionality from multiple source objects

### Functional Mixins
* Factory Functions: a function that returns an object, but isn't itself a class or constructor.
* we invoke a factory function as a normal function without using the new operator.
```js
// Basketball() returns an object directly, whereas constructor function which returns its object automatically.
function Basketball(color) {
  return { color: color, numDots: 35000 };
}

// Let's invoke Basketball() and check out its output, notice we don't need to use 'new' operator
const orangeBasketball = Basketball('orange');
console.log(orangeBasketball); // { color: 'orange', numDots: 35000 }

// a factory function can be used over and over to create any number of objects:
const myBB = Basketball('blue and green');
const yourBB = Basketball('purple');
const bouncy = Basketball('neon pink');
```

### The module Pattern
### The revealing module pattern
### Lesson summary
### Course outro
