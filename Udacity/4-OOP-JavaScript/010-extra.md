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
  const duck = { hasBill: true };
  const beaver = { hasTail: true };
  const otter = { hasFur: true, feet: 'webbed' };
  const platypus = Object.assign({}, duck, beaver, otter); // merge all together
  console.log(platypus); // { hasBill: true, hasTail: true, hasFur: true, feet: 'webbed' }
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

### Functional Mixins
### The module Pattern
### The revealing module pattern
### Lesson summary
### Course outro
