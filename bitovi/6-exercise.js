// write the dot operator as if it was implemented in JS
// * DOT takes the object and the property
// * DOT must walk up the __proto__ chain
// * object.hasOwnProperty('PROPERTY_NAME") returns if an object has a 'direct' property

const Person = (name) => {
  this.name = name;
};
Person.prototype.isPerson = true;

const person = new Person('Sophia');
// console.log(person.isPerson); //true
// Person.prototype.sayHi = (name) => { console.log(this.name) };
// console.log(person.sayHi(); //'Sophia'


// DOT(person, 'name'); //person.name
const DOT = (obj, prop) {
  if (obj.hasOwnProperty(prop)) {
    return obj[prop];
  }

};

// write the dot [[call operator as if it was implemented in JS
// * DOTCALL must retain context
// * DOTCALL(obj, propertyName, args);
// * DOTCALL(person, 'speak', []); //person.speak

Person.prototype.speak = () => {
  console.log('Hello!' + this.name);
};

const DOTCALL = (obj, prop, args) {
    const fn = obj[prop]();
    return fn.apply(obj, args); 
};



// SPECIAL: object.prototype.__proto__ //null -> that means you have reach the end of the chain


DOT(person, 'isPerson'); //person.isPerson






//test 40.41
