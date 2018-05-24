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

**Object.create** (same as proto-chaining but shorten)
* Object.create: 1st arg is the obj you want to inherit from
* 2nd arg will be an object with additional properties
```js
const Animal = {
  init: function(name) {
    this.name = name;
  },
  eats: function() {
    return this.name + ' is eating.';
  }
};

const Chordate = Object.create( Animal, {
  has_spine: { value: true }
});

const Mammal = Object.create( Chordate, {
  has_hair: { value: true }
});

const m = Object.create( Mammal );

m.init('dog');

console.log(m); // { name: 'dog' }
console.log(m.name); // dog
console.log(m.has_spine); // true
console.log(m.has_hair); // true
```

* Exercise!
