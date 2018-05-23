# Training Series - Types, Operators and Primitives

**Data types**
* Primitive: passed by value instead of passed by reference
  * Undefined: undefined
  * Null: null
  * Boolean: true
  * String: ‘hello’
  * Number: 2

* Object: similar to hash map
  * Object: {name: ‘value’} 
  * array: [1,2,3]
  * date: new Date()
  * RegExp: allow you to parse string easily
  * function: function(){}

* Operators
  * const.let (create a pointer/reference to some data type in memory): `const foo`
  * new: `new Foo`  — new object in memory, inherits through its prototype chain functionality
  * assignment (set a variable or an object property to POINT to a data type, somewhere in memory)	
  ```js
  foo = {bar: ‘a value’} // equal operator
  foo.bar = value // dot equal operator
  ```
  * delete: `delete foo.bar` (delete a property reference, can't use delete on variable references)	
  * member (aka 'dot operator', 'index operator') (read a property)	
  ```js
  foo.bar  
  foo[‘bar’]
  ```
  * call (call a function)	
  ```js
  bar()  
  foo.bar() (aka 'dot call operator')
  ```
  * comparison: ==, ===

* delete & typeof
**delete**
1. Example 1:
```js
var me = { name: { first: ‘sophia’ } } // me points to name, and then name points to first
var name = me.name // new variable `name` will now point to { first: ‘sophia’ }
// NOTE: if you reassign `name = me.name`, the below delete will empty the original object
delete me.name // delete the POINTER (connection) from me -> name, doesn’t actually delete the memory
// this extra memory that doesn’t have anything connect to will float around until garbage collection
name.first // ‘sophia’
```
2. Example 2:
```js
var me = { name: { first: ‘sophia’ } }
var name = me.name // name is pointing to { first: ‘sophia’ }
name = { first: ‘alex’ } // name will now POINT to a new object { first: ‘alex’ }
me.name.first // ‘sophia’, because it’s looking at the original me object
```

**typeof**

  * undefined ‘undefined’
  * boolean ‘boolean’
  * number ‘number’
  * NaN ‘number’ // 0/0, string/0, undefined/0
  * string ‘string’
  * function ‘function’
  * null ‘object’
  * array ‘object’
  * any other object ‘object’

* Bonus: Hash maps and order of complexity
* hash map is a form of data type ==> object = { key: value }
* fast insertion and removal for specific values

* doesn’t matter how many properties (keys) you’re adding, you can look up a property extremely quick using the key -> big O(1), constant time -> order one look up
* as oppose to array when you have to loop through each to find specific value => big O(n), linear time

* hashing function

