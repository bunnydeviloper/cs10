// write the dot operator as if it was implemented in JS
// * DOT takes the object and the property
// * DOT must walk up the __proto__ chain
// * object.hasOwnProperty('PROPERTY_NAME") returns if an object has a 'direct' property

function Person(name) { //NOTE: to define a contructor, you have to use this format
  this.name = name;
};
Person.prototype.isPerson = true;

const person = new Person('Sophia');

const DOT = (obj, prop) {
  // make sure obj exists b/c it'll be 'null' if reaches end of __proto__ chain
  // NOTE: if -> object.prototype.__proto__ //null -> you reached end of chain
  // no base case, if both condition below failed, it'll return undefined
  if (obj && obj.hasOwnProperty(prop)) {
    return obj[prop];
  } else if (obj) { 
    return DOT(obj.__proto__, prop); //recursion
  }


  /* personal rewrite:
  if (obj) {
    if (obj.hasOwnProperty(prop)) {
      return obj[prop];
    }    
    return DOT(obj.__proto__, prop);
  }
  */

};
DOT(person, 'name'); //person.name //console.log -> sophia
DOT(person, 'isPerson'); //person.isPerson //console.log -> true


// -------------
// write the dot [[call operator as if it was implemented in JS
// * DOTCALL must retain context

Person.prototype.speak = function() { //note: do NOT use arrow fn
  console.log('Hello!' + this.name);
};

const DOTCALL = (obj, prop, args) {
    // first, find the function up in the prototype chain
    const fn = DOT(obj, prop);
    // then, invoke the function using call or apply
    return fn.apply(obj, args); 
};

// * DOTCALL(obj, propertyName, args);
DOTCALL(person, 'speak', []); //person.speak() //Hello! Sophia
