console.log('---------- This is exercises for lesson 9 ----------');

// $ = function(selector) {};

/*
$.extend($.prototype, {
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

// ----- Exercise: creating the $ function

console.log(document.getElementById('ironman'));
const $ = function(selector) {
  const arr = [];
  arr.length = 0;
  arr.push.apply(this, items);

  return //array-like object
};

// test
//const ironMan = new $('#ironMan');
//ironMan instance of $ // true
//ironMan.length // 1
//ironMan[0] // <ul#ironMan>
