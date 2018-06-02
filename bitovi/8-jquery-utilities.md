# Training Series - jQuery Utilities

**jQuery functional utilities**  
* Why using `$` is useful? 
  1. Setting lots of properties
  2. Extending default values

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

* Exercise: implemnent $.isArray








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



$.proxy


* Extending properties

* Type checking
* Iterating objects and arrays
* Proxying functions
