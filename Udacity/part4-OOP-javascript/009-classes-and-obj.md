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
      console.log(`Hi, my name is ${this.name} and I am a ${this.favoriteLanguage} developer`);
    }

    // constructor fns *should* not have explicit return (no `return` statement)
  }
  let developer = new SoftwareDeveloper("Sophie");
  let programmer = new SoftwareDeveloper("Richard");
  developer.introduce(); // Hi, my name is Sophie and I am a JavaScript developer
  ```


### The 'this' keyword

### Setting our own 'this'

### Prototypal inheritance: subclasses

### Lesson Summary

### Course outro
