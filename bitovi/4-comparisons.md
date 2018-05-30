# Training Series - Comparisons
**Byte comparisons**
* `===`: compare types AND values
* null has a value of 0
* undefined has no value: `NaN`
* true has a value of 1, false has a value of 0
* string: either the value of number (eg '2') or NaN
* empty string, number 0, null, NaN, boolean false, and undefined --> all are 'falsy', everything else is 'truthy'
* empty array and empty object is 'truthy', but when do comparison, they are converted to empty string, hence 'falsy'

* `if ([]) {} //this code will run` and `if ([] == false) {} //this code will also run`
* `true == ({ toString: function(){ return '1' })` // this will return true
* `21 == '21' //true` but `21 === '21' //false`, you can also convert to number by `+'1' === 1 //true`
* `undefined == null //true` but `undefined === null //false`
* `[1] == true //true` but `[1] === true //false`
* function test() { //do something } // this function is 'truthy', but test() is 'falsy' b/c it has no return (`undefined`)

**Memory address comparisons**
* `{} === {} //false` b/c pointing to diff. location in memory
* `NaN === NaN //false`, NaN is a type of object

**Typecasting?**: coercion
```js
const x = 42;
const explicit = String(x); // explicit === '42'
const implicit = 42 + ''; // implicit === '42'
```

* Most primitive types have object wrappers ( String(), Number(), Boolean(), Object(), (Symbol()) )
* JS will automatically "box" (wrap) primitive values so you have access to methods:
```js
42.toString(); // Errors
const x = 42;
x.toString() // '42'
x.__proto__ // [Number: 0]
x instanceof Number // false
```
