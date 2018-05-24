# Training Series - Context
* What is `this`?

**dot call operator** 
```js
const dog = {
  barkCount = 0,
  bark = () => {
    this.barkCount++;
  }
};
dog.bark(); //'this' is pointing to dog (dot call operator)
```

**call operator** 
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
* Note: in the Chrome Dev Tools, you can `console.dir(foo)` to see all __proto__
* `Object.prototype === foo.__proto__` //true

```js
Person = (name) => {
  this.name = name;
};
// 'new' operator
const p = new Person('Sophia'); //'this' is an instance of Person, which inherits all prototypes

const q = Person('Jack'); //'this' is pointing to the window
```

```js
const dog = {
  barkCount: 0,
  bark: (barks) => {
    this.barkCount += barks;
  }
};
const cat = { meowCount: 0 }
// 'call' or 'apply' keyword, you can specify what 'this' is with the first parameter
dog.bark.call(cat, 1); //'this' is pointing to cat
```
* Rules for setting context

* proto & prototype: A visual representation

* Exercise!
