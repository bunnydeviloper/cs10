# Objects in Depth

### Introduction
* review array, object, dot notation, square bracket notation, nested objects
* note: objects and keys are similar to dictionaries and hashes in Python or Ruby
* objects can take a function as a property value

* dot notation limitation:
  * cannot use bicycle.1, have to use bicycle[1]
  * another issue is when variables are assigned to property name
    ```js
    const bicycle = {
      id: 132,
      color: "blue"
    };

    const myVar = "color";
    console.log(bicycle[myVar]); // "blue", because it's == to bicycle["color"]
    console.log(bicycle.myVar); // undefined, because there's no key w/in bicycle named 'myVar'
    ```

### Create and modify properties
* Creating objects:
  ```js
  const myObject = {}; // Using literal notation:
  const myObject = new Object(); // Using the Object() constructor function:
  ```
* data within objects are *mutable*
* use dot notation or square bracket notation to add properties
* use delete operator to remove properties (`delete bicycle.id`) // return true
* if you try to accessed it again, `bicycle.id`, it will return `undefined`
* Passing arguments:
  * **passing a primitive**
    * primitive (string, number, boolean...) are immutable, and limit to the local scope
    ```js
    let string = 'orange';
    function changeToApple(string) { string = 'apple'; }
    changeToApple(string);
    console.log(string); // "orange"
    ```
  * **passing an object**
    * if you pass an object into a function, JS passes a *reference* to that object
    ```js
    let originalObject = { favoriteColor: 'red' };
    function setToBlue(object) { object.favoriteColor = 'blue'; }
    setToBlue(originalObject);

    originalObject.favoriteColor; // 'blue'
    ```
    * When reassigning an object to a new variable, and then change that copy, the ref. changes too
    ```js
    const iceCreamOriginal = { Andrew: 3, Richard: 8 };
    const iceCreamCopy = iceCreamOriginal;
    iceCreamCopy.Richard; // 8
    iceCreamCopy.Richard = 99; // change value of the copied version

    iceCreamCopy.Richard; // 99
    iceCreamOrignal.Richard; // 99, the original reference changed as well
    ```
* Comparing object with another object: becareful!

### Invoking object methods
* Functions vs methods (a method is a property that points to a function)
* calling methods with dot notation or square bracket notation
  ```js
  const developer = {
    name: 'sophia',
    sayHello: function greeting() { console.log('Hello'); }, // note: named fn
    mood: [function() {alert('Im hungry';)}] // note: unnamed fn
  }
  developer.sayHello(); // "Hello"
  developer['sayHello'](); // "Hello"
  developer.mood[0](); // alert 'Im hungry'
  ```
* passing arguments into methods
* A method can access the object it was called on: `this` keyword
  ```js
  const triangle = {
    type: 'scalene',
    identify: function () {
      console.log(`This is a ${this.type} triangle.`);
    }
  };
  triangle.identify(); // 'This is a scalene triangle.'
  ```
* a value for `this` is set when a method is invoked on an object, refers to that object
* using `this`, methods can access and manipulate an object's properties
* `this` is a reserved word in JS

### Beware of globals
**How the fn is invoked determines the value of `this` inside the fudntion**
  * when a *regular* fn is invoked, the value of `this` is the global `window` object
    ```js
    const car = {
      numberOfDoors: 4,
      drive: function () { console.log(`Get in one of the ${this.numberOfDoors} doors, and let's go!`); }
    };
    const letsRoll = car.drive;
    letsRoll(); // `this` refers to the `window` object
        ```
  * when invoked as a method, the value of `this` will refer to the obj **left of the dot**
    `car.drive();`
* the `window` object: provided by the browser environment and is globally accessible
* since `window` obj is at the highest level (global), every var. declaration automatically become a property on the `window` obj
  ```js
  var currentFood = "ice cream";
  window.currentFood === currentFood; // true
  // only declaring with `var` or function() will add them to the window object, can't use `let` or `const`
  let currentlyStudy = "objects and methods";
  window.currentlyStudy === currentlyStudy; // false
  ```
* Global variables and functions are NOT ideal b/c:
  * tight coupling: when pieces of code are joined together where changing one unintentionally alters the functioning of some other code
  * name collisions: multiple fns will try to update/set the var., but these changes are overridden by each other

### Extracting properties and values
* Object.keys()
* Object.values()

### Lesson Summary
