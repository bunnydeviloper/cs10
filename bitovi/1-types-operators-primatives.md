# Training Series - Types, Operators and Primitives

**Data types**
* Primitive: passed by value instead of passed by reference
  * 	Undefined: undefined
  * 	Null: null
  * 	Boolean: true
  * 	String: ‘hello’
  * 	Number: 2

* Object:
  * 	Object: {name: ‘value’}  — similar to hash map
  * 	array: [1,2,3]
  * 	date: new Date()
  * 	RegExp: allow you to parse string easily
  * 	function: function(){}

* Operators
  * var 			var foo
  * new 			new Foo  — new object in memory, inherits through its prototype chain functionality
  * assignment	foo = {bar: ‘a value’}
  * 			foo.bar = value
  * delete 		delete foo.bar
  * member		foo.bar
  * 			foo[‘bar’]
  * call 			bar()
  * 			foo.bar()
  * comparison	==	
  * 			=== 

* the = operator: set a variable or property (. = operator (eg obj.name.sth =…)) to POINT somewhere in memory

* A memory stack representation of primitives
* A memory stack representation of objects
  * var me = { name: { first: ‘sophia’ } } // me points to name, and then name points to first
  * var name = me.name // variable name will now point to { first: ‘sophia’ }
  * delete me.name // delete the POINTER (connection) from me -> name, doesn’t actually delete the memory
  * 				// this extra memory that doesn’t have anything connect to will float around until garbage collection
  * name.first // ‘sophia’

  * var me = { name: { first: ‘sophia’ } }
  * var name = me.name // this is pointing to { first: ‘sophia’ }
  * name = { first: ‘alex’ } // name is POINTs to a new object { first: ‘alex’ }
  * me.name.first // ‘sophia’, because it’s looking at the original me object

* delete & typeof
**typeof**

  * undefined	‘undefined’
  * boolean		‘boolean’
  * number 		‘number’
  * NaN			‘number’ // 0/0, string/0, undefined/0
  * string		‘string’
  * function		‘function’
  * null				‘object’
  * array			‘object’
  * any other object 	‘object’

* Bonus: Hash maps and order of complexity
* hash map is a form of data type ==> object = { key: value }
* fast insertion and removal for specific values

* doesn’t matter how many properties (keys) you’re adding, you can look up a property extremely quick using the key -> big O(1), constant time -> order one look up
* as oppose to array when you have to loop through each to find specific value => big O(n), linear time

* hashing function

