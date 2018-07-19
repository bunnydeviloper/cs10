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
* Passing arguments:
  * primitive (string, number, boolean...) are immutable, and limit to the local scope
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

### Invoking object methods

### Beware of globals

### Extracting properties and values

### Lesson Summary
