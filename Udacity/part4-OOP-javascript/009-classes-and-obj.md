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

### Prototypal inheritance: subclasses
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
  Dog.prototype = {
    isHungry: false,
    color: "brown",
  }
  console.log(dog1.color); // undefined
  console.log(dog1.name); // "Java"

  // any new Dog objects created moving forward will use the updated prototype
  const husky = new Dog(3, 50, 'Tony');
  console.log(husky.name); // "Tony"
  console.log(husky.color); // "brown"

  ```

### Lesson Summary

### Course outro
