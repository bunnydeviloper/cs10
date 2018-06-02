// write the 'new' operator as if it was implemented in JS
// NEW takes the constructor function and an array of arguments
// const person = new Person('name');
// const person = NEW( Person, ['name'] );
// person.speak();

const Person = function(name) {
  this.name = name;
};

Person.prototype.speak = function() {
  console.log('Hello ', this.name);
};

const NEW = function(constructor, args) {
  // create a new object
  const obj = {};
  // set proto of our object to the prototype of the constructor
  obj.__proto__ = constructor.prototype;
  // call constructor with our object as the context
  constructor.call(obj, args); // OR constructor.apply(obj, args);
  // return our new object
  return obj;
};

// Example: 
const justin = new Person('Justin'); // using regular 'new' operator
justin.speak(); // Hello Justin

const allina = NEW(Person,'Allina'); // use the NEW fn we just create above
allina.speak(); // Hello Allina

const Sophia = NEW(Person, ['Sophia']);
Sophia.speak(); // Hello Sophia


// -----------
// write the instanceof operator as if it was implemented in JS
// check the proto chain for the constructor's prototype

const INSTANCEOF = function(object, constructor) {
  while (object.__proto__) {
    if (object.__proto__ === constructor.prototype) {
      return true;
    }
    object = object.__proto__;
  }
  return false;
};

const person = NEW(Person, 'Bonika');

console.log(INSTANCEOF(person, Person));

// Extra:
// `const a = [];` // same as const a = new Array();
// a instanceof Array; // this will return `true`
// a.__proto__ === Array.prototype; // this will also `true`

