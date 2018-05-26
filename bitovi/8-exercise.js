// Exercise: implement $.extend

$ = function(selector) {
  //do sth 
};

$.extend = function(target, object) {
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
console.log(target); // { first: 'Molly', last: 'Bloom' }
console.log(result); // { first: 'Molly', last: 'Bloom' }
console.log(result === target); //true

/*
// $.isArray = function(array) { //do sth };
// $.each = function(arr, callback) { //do sth };
// $.makeArary = function(arr) { //do sth };
// $.proxy = function(fn, context) { //do sth };
 
$.extend($, {
    isArray: function(array) {},
    each: function(arr, callback) {},
    makeArray: function(arr) {},
    proxy: function(fn, context) {},
});

// $.prototype.text = function(text) { //do sth };
// $.prototype.html = function(html) { //do sth };
$.extend($.prototype, {
    text: function(text) {},
    html: function(html) {},
});
*/
