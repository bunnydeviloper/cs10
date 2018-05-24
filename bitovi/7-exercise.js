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
const person = NEW( Person, ['name'] );

person.speak();

// Example: 
// const justin = new Person('Justin');
// justin.speak(); // Hello Justin

// const allina = new Person('Allina');
// allina.speak(); // Hello Allina

