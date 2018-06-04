console.log('---------- This is exercises for lesson 9 ----------');

console.log(document.getElementById('ironman'));

// ----- Exercise: creating the $ function
const $ = function(selector) {
  const arr = [];
  arr.length = 0;
  arr.push.apply(this, items);

  return //array-like object
};

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



// test
//const ironMan = new $('#ironMan');
//ironMan instance of $ // true
//ironMan.length // 1
//ironMan[0] // <ul#ironMan>
