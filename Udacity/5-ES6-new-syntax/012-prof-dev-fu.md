# Lesson 12: professional Developer-fu

### The Web is Growing Up
### Old and New Browsers
* HTML, CSS, and JS are fluid and always improving, browsers makers have to keep up with changes

### ES6 Specification [here](http://www.ecma-international.org/ecma-262/6.0/index.html)
### Supported Features
### The Web is Eternal

### Polyfills
* Polyfill is a JS file that patches a hole by replicating some native feature that's missing

### Using Polyfills
### Polyfill Walkthrough
* An example polyfill
  ```js
  // The code below is a polyfill for the new ES6 String method, startsWith():
  if (!String.prototype.startsWith) { // this line avoid overwriting the native 'startWith' method
    String.prototype.startsWith = function (searchString, position) {
      position = position || 0;
      return this.substr(position, searchString.length) === searchString;
    };
  }
  ```

### Other Uses for Polyfills
* Polyfill can also be used for SVG, Canvas, Web storage (local storage/session storage), Video, HTML5 elements, Accessibility, Web Sockets...

### Transpiling
* Source code: human readable code
* Compiler: is a computer program that takes a program written in some source code language (C++) and convert it to target language (machine code), changes level of abstraction (from source code to lower level language)
* Transpiling is a subset of compiling, it also takes source code and convert to target code, but both codes are at the same level of abstraction (output langugage still human readable)
  * Eg: ES5 -> ES6, Java -> Javascript

### Using Babel
* the most popular JS transpiler is called Babel (the original name was 6to5)
  * Babel converts ES6 to ES5, JSX to Javascript, and Flow to Javascript
* the way Babel transforms code from one language to another is through plugins (eg: ES2015 arrow function plugin, ES2015 template literals transform... or use the ES2015 preset)

### Transpiling Walkthrough
### Transpiling Recap
  ```js
  // original ES6 code:
  ['Richard', 'James'].map(name => `${name}!`);

  // ES5 converted code:
  'use strict';
  ['Richard', 'James'].map(function(name) {
    return name + '!';
  });
  ```

### Course Summary
