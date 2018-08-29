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
* Comparison between constructor fn and factory fn
  * BOTH: create a new object, can be called multiple times to create multiple objects with diff args
  * ONLY CONTRUCTOR: implicates prototypal inheritance
  * INVOKE:
    * Constructor fn: `new ConstructorFunc();`
    * Factory fn: `factoryFunc();`
* Leverage factory function with a closure to preserve state:
  ```js
  function Radio(mode) {
    let on = false;
    // return an object that has a reference to variables that defined within the fn (-> closure)
    // that means it can preserve its own state
    return {
      mode: mode,
      turnOn: function () { on = true; },
      ison: function () { return on; }
    };
  }
  // invoke the function
  let fmRadio = Radio('fm');
  console.log(fmRadio.on); // undefined
  console.log(fmRadio); // { mode: 'fm', turnOn: function, isOn: function }
  fmRadio.isOn(); // return 'false'
  fmRadio.turnOn();
  fmRadio.isOn(); // return 'true'
  ```
* Functional mixin: is a composable factory function that receives a `_mixin_` as an argument, copies properties and methods from that mixin, and returns a new object
  ```js
  function CoffeeMaker(object) {
    let needsRefill = false;

    // target object is blank, source object is the argument you passed in, and additonal object as follow...
    return Object.assign({}, object, {
      pourAll: function () { needsRefill = true; },
      isEmpty: function () { return needsRefill; }
    });
  }
  const mixedCoffeeMaker = CoffeeMaker({ style: 'percolator' });
  console.log(mixedCoffeeMaker); // return object looks like this
  // {  style: 'percolator',
  //    pourAll: function () { needsRefill = true; },
  //    isEmpty: function () { return needsRefill; } }
  ```
* Functional mixins are composable; we can use them as individual pieces of code that add specific properties like an assembly line.

### The module Pattern
* What is Private Properties?
* Privacy with Underscores?
  * You may have seen object properties and method names prefixed with an underscore `_`, especially in library code. While an underscore is added by the code's author to distinguish privacy, it is privacy by convention only. JavaScript does not give special functionality or meaning to properties prefixed with an underscore!
* Private Properties: Function
  ```js
  function instantiateDeveloper() {
    return { name: 'Veronika', getName: function () { return this.name; } };
  }
  let developer = instantiateDeveloper();
  developer.getName; // 'Veronika', direct access to properties
  developer.name; // 'Veronika', direct access to properties

  // Along with direct access, we can mutate and reassign the value of the name property, so how do we implement private properties?
  developer.name = 'Not Veronika';
  developer.name; // 'Not Veronika'

  // use scope and closures to create a private state
  function myCounter() {
    let count = 0;
    return function () { count += 1; return count; };
  }
  let counter = myCounter();
  counter(); // 1
  counter(); // 2
  counter.count; // undefined, cannot access private state
  count; // undefined, cannot access private state
  ```
* using The Module Pattern: to create private data
  ```js
  let diana = (function(){
    let secretIdentity = 'Diana Prince';
    return { introduce: function(){ console.log(`Hi, I am ${secretIdentity}`); } };
  })();

  // the IIFE prevent pollution of the global scope
  console.log(diana.secretIdentity); // undefined
  // because the return's object retains access to its parent's scope, we can
  diana.introduce(); // 'Hi, I am Diana Prince'
  ```
**NOTE**: at its core, the Module Pattern leverages scope, closures, and (commonly) IIFE's, to not only hide data from external access, but to also privide a public interface for such data

### The revealing module pattern
* The underlying philosophy of the Revealing Module Pattern is that, while we still maintain encapsulation (as in the Module Pattern), we also reveal certain properties (and methods).
* The key ingredients to the Revealing Module Pattern are:
  * An IIFE (wrapper)
  * The module content (variables, methods, objects, etc.) // this is local variables or fns
  * A returned object literal with keys that point to data intended to be revealed
* Example:
  ```js
  let person = (function () {
    let privateAge = 0;
    let privateName = 'Andrew';

    function privateAgeOneYear() {
      privateAge += 1;
      console.log(`One year has passed! Current age is ${privateAge}`);
    }
    function displayName() { console.log(`Name: ${privateName}`); }
    function ageOneYear() { privateAgeOneYear(); }

    return { name: displayName, age: ageOneYear };
  })();

  // the IIFE has some private data: privateAge, privateName, and privateAgeOneYear().
  // The returned object is stored in person and provides a public interface through which we can access this data!

  console.log(person.name()); // 'My name is Andrew'
  console.log(person.age()); // 'One year has passed! Current age is 1'
  console.log(person.age()); // ''One year has passed! Current age is 2'

  // however, when we mutate the data...
  person.privateName = 'Richard';
  console.log(person.name()); // 'My name is Andrew'
  console.log(person.displayName()); // undefined
  ```

### Lesson summary
### Course outro
