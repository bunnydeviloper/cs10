var Person = function(name) {
// or function Person(name) { //NOTE: don't use arrow fn
  this.name = name;
}

const student = new Person('Sophia');

Person.prototype.isSmart = true;

const DOT = (obj, prop) => {
  if (obj) {
    if (obj.hasOwnProperty(prop)) {
      return obj[prop];
    }
    return DOT(obj.__proto__, prop);
  }
};

console.log('DOT fn: ', DOT(student, 'toString')); //DOT fn: function toString() { [ native code ] }
console.log('DOT fn: ', DOT(student, 'isSmart')); // DOT fn: true
console.log('DOT fn: ', DOT(student, 'name')); //DOT fn: Sophia

Person.prototype.sayHi = function(toWhom) { //NOTE: don't use arrow fn, don't know why...
  console.log(`DOTCALL fn: Hello ${toWhom}, my name is ${this.name}.`);
};

const DOTCALL = (obj, prop, args) => {
  const fn = DOT(obj, prop);
   return fn.apply(obj, args);
}

DOTCALL(student, 'sayHi', ['Jolly']); //DOTCALL fn: Hello Jolly, my name is Sophia.

// `call` and `apply` can be interchange
// if you use apply, args must be an array
// if you use call, args can be string or array
