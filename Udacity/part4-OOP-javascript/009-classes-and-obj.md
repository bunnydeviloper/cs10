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
  * when invoking constructor fn w `new` operator, `this` gets set to the newly-created obj
  * when calling a fn that belongs to an obj (=method) sets `this` to the obj itself

### Setting our own 'this'

### Prototypal inheritance: subclasses

### Lesson Summary

### Course outro
