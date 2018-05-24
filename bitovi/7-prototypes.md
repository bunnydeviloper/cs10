# Training Series - Prototypes, `.prototype` and `.proto` demystified! 

**Prototype methods**
```js
const Animal = function(name) {
  this.name = name;
};
Animal.prototype.eats = function() {
  return this.name + ' is eating.'
};
const sponge = new Animal('Bob');
//when you use sponge.eats, sponge will 1st look in its own __proto__ chain
//then it looks in the Animal prototype chain, and found 'eats' method
//note: sponge.name is its own property, no need to go up the chain
```

**Tricks:** OBJECTS will have __proto__, FUNCTIONS will have prototype

**Prototypal inheritance**
**Proto-chaining**
```js
const Animal = function(name) { this.name = name };
Animal.prototype.eats = function() { return this.name + ' is eating.' };

const Chordate = function(name) { Animal.call(this, name); };
// same as const Chordate = function(name) { this.name = name };
Chordate.prototype = new Animal();
Chordate.prototype.has_spine = true;

const Mammal = function(name) { Chordate.call(this, name); };
// same as const Mammal = function(name) { this.name = name };
Mammal.prototype = new Chordate();
Mammal.prototype.has_hair = true;

const m = new Mammal('dog');
console.log(m.eats()); //dog is eating.
console.log(m.has_spine); //true
console.log(m.has_hair); //true
```

**Shared properties**
```js
const Animal = function() {
  this.offspring = [true];
}
const Dog = function() {}
Dog.prototype = new Animal(); //'new' keyword create a new object in memmory
//that has a __proto__ property and points to Animal prototype

const dog1 = new Dog();
const dog2 = new Dog();
const pup = new Dog();
dog1.offspring.push(pup);
dog2.offspring; //console.log => [true, Animal {}]
```
* If you're putting methods/properties on a prototype, those properties will be shared and modified

* Object.create

* Exercise!
