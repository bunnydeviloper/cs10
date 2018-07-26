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

### Beware of globals

### Extracting properties and values

### Lesson Summary
