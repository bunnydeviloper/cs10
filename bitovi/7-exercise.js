// write the 'new' operator as if it was implemented in JS
// NEW takes the constructor function and an array of arguments

const Person = function(name) {
  this.name = name;
};

Person.prototype.speak = function() {
  console.log('Hello ', this.name);
};

const NEW = function(constructor, args) {
  // create a new object
  let obj = {};
  // set proto of our object to the prototype of the constructor
  obj.__proto__ = constructor.prototype;
  // call constructor with our object as the context
  constructor(obj);
  // return our new object
  return obj;
};

// const person = new Person('name');

// const person = NEW( Person, ['name'] );

// person.speak();

// Example: 
// const justin = new Person('Justin');
// justin.speak(); // Hello Justin

// const allina = new Person('Allina');
// allina.speak(); // Hello Allina


// write the instanceof operator as if it was implemented in JS
// check the proto chain for the constructor's prototype

const INSTANCEOF = function(instance, constructor) {
  if (instance && constructor) {
    // walk up obj's proto chain until the prototype of our constructor is found
    if (instance.__proto__ === constructor.prototype) {
      return true;
    }
  }
  return false;
};

person = new Person('Bonika');
console.log(INSTANCEOF(person, Person));

// `const a = [];` // same as const a = new Array();
// a instanceof Array; // this will return `true`
// a.__proto__ === Array.prototype; // this will also `true`

