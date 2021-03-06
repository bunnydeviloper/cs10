# Training Series - Context
* What is `this`? (what is the context of fn being called? how the method was invoked?)

## NOTE: `this` only have three rules: 1) dot call, 2) `new`, 3) `call`/`apply`
## If none of the above rules applied, window will be the context (`this` will be the window)

**dot call operator**: when use dot call operator, `this` will point to the object in front of the `.`
```js
const dog = {
  barkCount: 0,
  bark: function() { //NOTE: do NOT use arrow function
    this.barkCount++; //see prefix and postfix below
  }
};

console.log(dog.barkCount); //0

dog.bark(); //'this' is pointing to dog (dot call operator)
console.log(dog.barkCount); //1 (first bark)

dog.bark(); 
console.log(dog.barkCount); //2 (2nd bark)
```

**prefix (++x)**: increment by 1, then return new value
**postfix (x++)**: return current value, then increment by 1

**call operator**: when use call operator, `this` will point to the window (b/c it lost ref. to the original obj)
```js
const bark = dog.bark;
bark(); //'this' is now pointing to the window (call operator)
```

* setTimeout example:
```js
setTimeout = (cb, time) {
  __WAIT(time);
  cb() // cb() is a call operator
};

setTimeout(dog.bark, 2000);
// same as...
const bark = dog.bark;
setTimeout(bark, 2000); //bark is passed in as a callback, hence cb() is a call operator
```

* object has a prototype property
* `const foo = {};` is the same as `const foo = new Object();`
* `foo.toString();` // ==> [object object] //'this' will point to foo
* proto & prototype: A visual representation
* Note: in the Chrome Dev Tools, you can `console.dir(foo)` to see all __proto__
* `Object.prototype === foo.__proto__` //true

```js
const mammal = {};
mammal.hasHair = true;
const chordate = { hasSpine = true };
const animal = { eatThings: true };
console.log(mammal.eatThings); //undefined

mammal.__proto__ = chordate;
chordate.__proto__ = animal;
mammal.eatThings //true
```

**`new` operator**: `this` is an instance and inherits all prototype properties & methods of original obj
```js
Person = (name) => {
  this.name = name;
};
const p = new Person('Sophia'); //'this' is an instance of Person, which inherits all prototypes
// carefull!!
const q = Person('Jack'); //'this' will point to the window
```

**`call` and `apply`**: you can specify what 'this' is with the first parameter
```js
const dog = {
  count: 0,
  bark: function(barks) {
    this.count += barks;
  }
};
const cat = { count: 0 }

dog.bark.call(cat, 1); //'this' is pointing to cat
console.log('dog.count 1st time: ',  dog.count); //0 //no change
console.log('cat.count 1st time: ',  cat.count); //1, change from 0 to 1

dog.bark.call(cat, 3);
console.log('dog.count 2nd time: ',  dog.count); //0 //still no change
console.log('cat.count 2nd time: ',  cat.count); //4, change from 1 to 4
```
* Exercise!

**Extras**
```js
// in chrome dev tool console:
const foo = () => { console.log(this.document.body };
foo(); // same result as `window.document.body`
```
