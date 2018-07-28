# Classes and Objects

### Introduction
* Objects have prperties to represent *attributes* or *characteristics*
* Objects have methods to represent *actions* that can be performed

### Constructor Functions
* use `new` keyword to instantiate (*create*) a new object (first letter should be capitalize)
* Constructor functions: structure and syntax
  ```js
  function SoftwareDeveloper(name) {
    this.favoriteLanguage = "JavaScript";
    this.name = name;
    this.introduce = function () {
      console.log(`Hi, my name is ${this.name} and I am a ${this.favoriteLanguage} developer.`);
    }
    this.fullIntro = function () {
      this.introduce();
      console.log(`My favoriate language is also ${this.favoriteLanguage}.`);
    }

    // constructor fns *should* not have explicit return (no `return` statement)
  }
  let developer = new SoftwareDeveloper("Sophie");
  let programmer = new SoftwareDeveloper("Richard");

  developer.introduce(); // Hi, my name is Sophie and I am a JavaScript developer
  ```
* `instanceof` operator tests whether or not that constructor appeats in the **prototype chain** of an obj, which means that we can't always check exactly which constructor created that object

### The 'this' keyword
* `this` refers to "this object" or "the object at hand"
* the value for `this` is set when a method is invoked on an object
  1. when invoking constructor fn w `new` operator, `this` gets set to the newly-created obj
  2. when calling a fn that belongs to an obj (=method) sets `this` to the obj itself
  3. when calling a fn on its own will set `this` to `window`, which is the global object
  4. set `this` ourselves

### Setting our own 'this'
* call(the obj to set the value of `this`, receiving fn's args1, receiving fn's args2, ...)
  * `call()` let you "borrow" a method from one obj and then use it on *another* obj
  ```js
  const meBeforeYou = {
    title: "Me Before You",
    describe: function () { console.log(`${this.title} is a romantic novel.`); }
  }
  function sayHello(name) {
    console.log(`Hello ${name}, have you read ${this.title} yet?`);
  }
  const PSILoveYou = { title: "P/S I Love You" }
  meBeforeYou.describe.call(PSILoveYou); // P/S I Love You is a romantic novel
  sayHello.call(meBeforeYou, "Sophia"); // Hello Sophia, have you read Me Before You yet?
  ```
* apply(the obj to set the value of `this`, [args1, args2, args3...])
  * `call()` may be limited if you don't know ahead of time the # of args that the fn needs
  * `apply()` can unpacks multiples args and apply one by one (performance will be a little slower)

* bind():
  * NOTE:
    1. `call()` and `apply()` invoke a fn, whereas `bind()` returns a new fn with `this` bound to a specific obj
    2. `bind()` is a method that is called on a function, passing in the object as argument
  * **callbacks** and `this`
    ```js
    function invokeTwice(cb) {
       cb();
       cb();
    }
    const dog = {
      age: 5,
      growOneYear: function () {
        this.age += 1;
      }
    };
    dog.growOneYear();
    console.log(dog.age); // 6

    // PROBLEM:
    invokeTwice(dog.growOneYear); // note: growOneYear is invoked as a fn, rather than a method
    // hence `this` loses reference to the dog object and `this` is now the global `window` obj
    console.log(dog.age); // 6

    // FIX: use anonymous closure to close over the `dog` obj
    invokeTwice(function () { dog.growOneYear(); });
    console.log(dog.age); // 8, increase from 6 to 8

    // FIX: use bind()
    const myGrow = dog.growOneYear.bind(dog);
    invokeTwice(myGrow);
    console.log(dog.age); // 10
    ```

### Prototypal inheritance:
* Prototype chain
* Example:
  ```js
  function Dog(age, weight, name) {
    this.age = age;
    this.weight = weight;
    this.name = name;
  }
  // instead of defining bark method inside constructor fn, we move it outside and link to prototype chain
  // by adding methods to the prototype, memory is saved as more instances are created
  // along with being more efficient, we don't have to update all "children" objects (instances) individually
  Dog.prototype.bark = function () {
      console.log(`${this.name} says woof!`);
  };

  const dog1 = new Dog(2, 60, 'Java');
  const dog2 = new Dog(4, 55, 'Jodi');
  dog1.bark(); // Java says woof! // Note: we don't need to use dog1.prototype.bark();
  dog2.bark(); // Jodi says woof!

  // if you replace the prototype object with something else entirely, the intances retain old link and do not have access to the updated prototype's properties
  const replaceProperties = {
    isHungry: false,
    color: "brown",
  }
  Dog.prototype = replaceProperties;

  console.log(dog1.color); // undefined
  console.log(dog1.bark); // [Function]

  // any new Dog objects created moving forward will use the updated prototype
  const husky = new Dog(3, 50, 'Tony');
  console.log(husky.color); // "brown"
  console.log(husky.bark); // undefined
  ```
* hasOwnProperty('property name'): allows you to check whether the property was owned or inherited, returns true/false
* isPrototypeOf(): check whether an object exists in another object's prototype chain
* Object.getPrototypeOf(): get all prototype properties
* the `constructor` property: returns a reference to the constructor fn that created that obj in the 1st place
  ```js
  // continue from code above
  const own = husky.hasOwnProperty('name');
  console.log(own); // true

  const inherited = husky.hasOwnProperty('color');
  console.log(inherited); // false

  const result = replaceProperties.isProtoypeOf(husky);
  console.log(result); // true

  const myPrototype = Object.getPrototypeOf(husky);
  console.log(myPrototype); // { isHungry: false, color: 'brown' } // note: doesn't return the constructor

  console.log(husky.constructor); // function Dog (age, weight, name) { this.age = age ...}
  console.log(replaceProperties.constructor); // function Object() { [native code] }
  ```

### Prototypal inheritance: subclasses
* secret link: *__proto__* property, which is a property of all objects, made by constructor fn, points directly to the constructor's prototype object
  ```js
  const bear = {
    claws: true,
    diet: 'carnivore'
  }
  function PolarBear() {}
  PolarBear.prototype = bear;
  const snowball = new PolarBear();
  snowball.color = 'white';
  snowball.favoriteDrink = 'cola';

  console.log(snowball); // { color: 'white', favoriteDrink: 'cola' }
  console.log(snowball.claws); // true, this property is inherited
  console.log(snowball.diet); // 'carnivore', also inherited

  console.log(snowball.__proto__); // { claws: true, diet: 'carnivore' }
  console.log(snowball.__proto__ === bear); // true
  console.log(snowball.__proto__ === PolarBear.prototype); // true
  console.log(snowball.__proto__ === Object.getPrototypeOf(snowball)); // true
  ```
* NOTE: you should NOT use `__proto__` to manage inheritance
* ALSO: Child.prototype and Parent.prototype refer to the same object, which means any changes you make to Child's prototype will also be made to Parent's prototype (we don't want children to be able to modify properties of their parents) ==> DONT use `Child.prototype = Parent.prototype;` // no prototype chain will be set up
* PROCESS:
  1. JS engine searches inside the instanceObj
  2. If not found, then move to search the intanceObj.__proto__ property
  3. instanceObj.__proto__ points to ConstructorFn.prototype, hence search in the prototype
  4. If found, return, and then invoke the method
  5. The value of `this` is set to instanceObj


### Lesson Summary

### Course outro
