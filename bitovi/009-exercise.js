console.log('---------- This is exercises for lesson 9 ----------');

console.log(document.getElementById('ironman'));

// ----- Exercise: creating the $ function
const $ = function(selector) {
  const elements = document.querySelectorAll(selector);
  for (let i=0; i< elements.length; i++) {
    const node = elements[i];
    this[i] = node; // can you combine two lines into 'this[i] = elements[i]' ???
  }
  this.length = elements.length;
};

// test
const listOfHeros = new $('ul li'); // const $li = new $("ul li");
console.log(listOfHeros); // $ {0: li, 1: li, 2: li, Length: 3} // can expand to see li elements
console.log(listOfHeros instanceof $); // true
console.log(listOfHeros.length); // 3
console.log(listOfHeros[0]); // <li><a href='#ironman">Ironman</a></li>


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

