# Training Series - jQuery Utilities

**jQuery functional utilities**  
* Why using `$` is useful? 
  1. Setting lots of properties ($.extend, $.isArray, $.each, $.makeArray...)
  2. Extending default values
  ```js
  /* original function
   * const move = function(e, options) { // 'e' for 'element'
   *   $(e).offset({ left: options.from || 0 });
   *   setTimeout(function() {
   *       $(e).offset({ left: options.to || 100 });
   *     }, options.time || 1000);
   * };
  */

  const move = function(e, options) {
    options = $.extend({
      time: 1000,
      from: 0,
      to: 100,
    }, options);

    $(e).offset({ left: options.from });
    setTimeout(function() {
      $(e).offset({ left: options.to });
    }, options.time);

  };

  const div = document.getElementById('beagles');
  move(div, { to: 10, from: 0, time: 1000 });
  ```

* $.extend (similar to Object.assign() or the spread operator ( ... ))
* // Merge the contents of two or more objects together into the first object

* Exercise: implement $.extend

**Type Checking**  
* `typeof [].length === 'number'` // true
* `[] instanceof Array` // true
* `[].constructor === Array` // true
* Precaution: Array objects created within one iframe share NOTHING with array's created within another iframe.
```js
const iframe = document.createElement('iframe');
document.body.appendChild('iframe');

const _Array = window.frames[window.frames.length-1].Array;
const arr = new _Array(1,2,3); // [1,2,3]
typeof arr; // 'object'
arr instanceof Array; // false
arr.constructor === Array; //false

const obj = [];
Object.prototype.toString.call(obj) === '[object Array]'; // true
```

* Exercise: implement $.isArray

**Duck Typing**
> "If it walks like a duck and swims like a duck and quacks like a duck, I call that bird a duck."

* Duck typing is concerned with those properties that are used on the object rather than the type of the object itself.
* An object that is like an Array has the following characteristics:
  * arguments.length; //an `Object` that has a length property of a non-negative `Integer`
  * arguments[0]; //has some indexed properties
  * eg: 
    1. `const arrLike = { length: 0 };` // like []
    2. `const arrLike2 = { 0: 'foo', 5: 'bar', length: 6 };` // like ['foo', undefined x 4, 'bar']
  * NOTE:
    1. `arrayLike instanceof Array;` // false, but `arrayLike instanceof Object:` // true
    2. `arrayLike[0] = 'prop';`, then `arrayLike.length;` // still result in 0, doesn't auto-update
  * DOM NodeList is array-like

* Exercise: implement $.isArrayLike
* Exercise: implement $.each
* Exercise: implement $.makeArray (convert array-like object into true JS array)
* Exercise: implement $.proxy(fn, context)
  * Becareful of context:
  ```js
  const dog = {
    name: 'xixi',
    speak: function() {
      console.log( this.name + ' says woof');
    }
  };

  const speak = dog.speak;
  speak() // 'this' will not work, because 'this' will be the window
  setTimeout(dog.speak, 1000); // same here, 'this' will be pointing at the window

  dog.speak(); // can only use dot call operator to make 'this' works properly 

  // use $.proxy(fn, context): pass the fn you want to call as 1st arg, then pass 'this' into the 2nd arg
  const speak = $.proxy( dog.speak, dog );
  speak(); // now 'this' will have the right context
  setTimeout(speak, 1000); // 'this' will have the right context here as well

  // Extra: you can use binding in modern browser as well:
  const speak = dog.speak.bind(dog);
  speak();
  ```

**Ternery Operator**
* `return condition ? truthExpression : falseyExpression;`
