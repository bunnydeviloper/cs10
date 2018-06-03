// ----- Exercise: implement $.extend

$ = function(selector) { /* do sth */ };

$.extend = function(target, object) { //1st arg is 'default', 2nd arg is 'additional' props
  // copy all properties from object into target
  for (const prop in object) {
    if (object.hasOwnProperty(prop)) {
      target[prop] = object[prop];
    }
  }
  return target;
};

const target = { first: 'Molly' }, object = { last: 'Bloom' };
const result = $.extend(target, object);

// test
console.log('target', target); // { first: 'Molly', last: 'Bloom' }
console.log('result', result); // { first: 'Molly', last: 'Bloom' }
console.log('result === target: ', result === target); //true

// ----- Exercise: implement $.isArray (determine whether the argument is an array)

$.extend($, {
  isArray: function(obj) {
    return Object.prototype.toString.call(obj) === "[object Array]";
  },
  each: function(collection, cb) {
    if (isArrayLike(collection)) { // applies when collecttion is an array ['a', 'b']
      for (let i=0; i < collection.length; i++) {
        cb(i, collection[i]);
      }
    } else { // applies when collection is an object {foo: 'bar', zed: 'ted'}
      for (let prop in collection) {
        cb(prop, collection[prop]);
      }
    }
    return collection; // always return the original collection
  },
  makeArray: function(arr) {
  },
  proxy: function(fn, context) {
  },
});

// test
console.log('isArray? []: ', $.isArray([])); // == true
console.log('isArray? arguments: ', $.isArray(arguments)); // == false

/* test with browser:
 * const iframe = document.createElement('iframe');
 * document.body.appendChild(iframe);
 * const _Array = iframe.contentWindow.Array; // $.isArray(new _Array()) == true;
 */

// ----- Exercise: implement $.isArrayLike(obj) // Determine whether the argument is LIKE an array
const isArrayLike = function(object) {
  if (typeof object.length === 'number') {
    if (object.length === 0) return true;
    if (object.length > 0) {
      const lastIndex = object.length - 1;
      return lastIndex in object; //will return true or false
    }
    return false
  }
  return false;
};

/* rewrite with ternary operators
 * const isArrayLike = function(object) {
 *   return typeof(object.length === 'number') ?
 *     (object.length >= 0 ?
 *       object.length === 0 || ((object.length -1) in object)
 *       : false;
 *     : false;
 * };
 */

// test
console.log(`isArrayLike? ['a', 'b', 'c'] : ${isArrayLike(['a', 'b', 'c'])}`); // == true
console.log(`isArrayLike? {length: 0} : ${isArrayLike({length: 0})}`); // == true, also true with 'length'
console.log(`isArrayLike? {'hello': 5, 5: 'hi'} : ${isArrayLike({'hello': 5, 5: 'hi'})}`); // == false
console.log(`isArrayLike? {0: 'foo', 5: 'bar', length: 6} \
: ${isArrayLike({0: 'foo', 5: 'bar', length: 6})}`); // == true
console.log(`isArrayLike? arguments : ${isArrayLike(arguments)}`); // == true

/* test with browser
 * const divs = document.getElementsByTagName('div');
 * isArrayLike(divs) == true;
 * const lis = document.getElementsByTagName('li');
 * isArrayLike(lis) == true;
 */

// ----- Exercise: implement $.each(obj, cb(index, value)) // Iterate over arrays or objects
// test
const resultEachArr = $.each(['a', 'b', 'c'], function(index, item) {
  console.log(`${item} is at index ${index}`);
});
console.log(resultEachArr);
const resultEachObj = $.each({foo: 'bar', zed: 'ted'}, function(prop,value) {
  console.log(`prop: ${prop}, value: ${value}`);
});
console.log(resultEachObj);

// ----- Exercise: implement $.makeArray(arr) 
// $.prototype.text = function(text) { /* do sth */ };
// $.prototype.html = function(html) { /* do sth */ };
$.extend($.prototype, {
    text: function(text) {},
    html: function(html) {},
});
