console.log('---------- This is exercises for lesson 9 ----------');

console.log(document.getElementById('ironman'));

// ----- Exercise: creating the $ function
// fn will take a selector as arg, select elements from DOM, and return an array-like object
// hint: make an 'array-like' object, set length to curr || 0, add items w/ [].push.apply(this, items)
const $ = function(selector) {
  const elements = document.querySelectorAll(selector);
  Array.prototype.push.apply(this, elements);
};

// test
const listOfHeros = new $('ul li'); // const $li = new $("ul li");
console.log(listOfHeros); // $ {0: li, 1: li, 2: li, Length: 3} // can expand to see li elements
console.log(listOfHeros instanceof $); // true
console.log(listOfHeros.length); // 3
console.log(listOfHeros[0]); // <li><a href='#ironman">Ironman</a></li>

// ----- Extras: write array push fn -----
Array.prototype.push = function(a, b, c) { // can have unlimited arguments
  const startLength = this.length || 0;
  for (let i=0; i < arguments.length; i++) {
    this[startLength + i] = arguments[i];
  }
  this.length = startLength + arguments.length;
};

// ----- Exercise: add html method to get/set the innerHTML of an element(s)
// hint: html() should be 'chainable', returning the original $ instance when setting


// test
const superheros = new $('#superheros li');
console.log(superheros);
// superheros.html('<div>Awesome Superheros</div>').html(); // '<div>Awesome Superheros</div>'




// $li.html();

/*
@.extend = function(target, object) {
  for (let prop in object) {
    if (object.hasOwnProperty(prop)) target[prop] = object[prop];
  }
  console.log(target);
  return target;
};

@.extend($.prototype, {
  html: function(string) {},
  val: function(value) {},
  text: function(string) {},

  find: function(el) {},
  next: function() {},
  prev: function() {},
  parent: function() {},
  children: function() {},

  attr: function(attr, val) {},
  css: function(style, val) {},
  width: function() {},
  hide: function() {},
  show: function() {},

});
*/

