# Lesson 11: Built-ins

### New built-ins
### Symbols intro
* Symbols are the latest addition to primitive data types
  * Primitive: numbers, strings, booleans, null, undefined

### Symbols
* symbols: a unique identifier, most often used to uniquely identify properties within an object
  * eg: multiple bananas within a bowl, how do you know which one? hence need a symbol
  ```js
  const sym1 = Symbol('apple'); // symbol is immutable
  console.log(sym1); // Symbol(apple), note: the descpt 'apple' can't be used to access symbol itself

  const sym2 = Symbol('apple');
  console.log(sym1 === sym2); // false

  const bowl = {
    'apple': { color: 'red', weight: 136 },
    'banana': { color: 'yellow', weight: 183 },
    'orange': { color: 'orange', weight: 170 }
    'banana': { color: 'yellow', weight: 190 }, // second banana added
  };
  console.log(bowl); // Object { apple: Object, banana: Object,  orange: Object }
  // note that the second banana overwrote the original banana

  // FIX: use Symbol, each property is now unique
  const bowl = {
    [Symbol('apple')]: { color: 'red', weight: 136 },
    [Symbol('banana')]: { color: 'yellow', weight: 183 },
    [Symbol('orange')]: { color: 'orange', weight: 170 },
    [Symbol('banana')]: { color: 'yellow', weight: 190 }
  };
  console.log(bowl); // Object {Symbol(apple): Object, Symbol(banana): Object, Symbol(orange): Object, Symbol(banana): Object}
  ```

### Iteration & Iterable protocols
* The **iterable** protocol: use for defining and customizing the iteration behavior of objects
  ```js
  const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  for (const digit of digits) {
    console.log(digit);
  }
  ```
* for an object to be iterable, it must contain a default **iterator method**
* The iterator method, which is available via the constant [Symbol.iterator], is a zero arguments function that returns an iterator object. An iterator object is an object that conforms to the iterator protocol.

* The **iterator** protocol: use to define a standard way that an obj produces a sequence of values
  * An object becomes an iterator when it implements the .next() method.
  * The .next() method is a zero arguments function that returns an object with two properties:
    1. value : the data representing the next value in the sequence of values within the object
    2. done : a boolean representing if the iterator is done going through the sequence of values
      * If done is true, then the iterator has reached the end of its sequence of values.
      * If done is false, then the iterator is able to produce another value in its sequence of values.
    ```js
    const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    // use array’s default iterator to step through the each value in the array.
    const arrayIterator = digits[Symbol.iterator]();

    console.log(arrayIterator.next());
    console.log(arrayIterator.next());
    console.log(arrayIterator.next());

    Object {value: 0, done: false}
    Object {value: 1, done: false}
    Object {value: 2, done: false}
    ```

### Sets
* a set is an object that lets you store unique items, you can add/remove items, and loop over set
* the biggest different between a set and an array are:
  * sets are not indexed-based
  * items in a set can't be accessed individually
  ```js
  const game = new Set(); // create an empty Set 'games' with no items
  console.log(games); // Set {}
  const games = new Set(['Super Mario Bros.', 'Banjo-Kazooie', 'Mario Kart', 'Super Mario Bros.']);
  console.log(games); // Set {'Super Mario Bros.', 'Banjo-Kazooie', 'Mario Kart'}
  // note, the 'Super Mario Bros.' was duplicate so it was removed

  games.add('Banjo-Tooie');
  games.add('Age of Empires');
  games.delete('Super Mario Bros.');

  console.log(games); // new Set {'Banjo-Tooie', 'Super Mario Bros.', 'Banjo-Kazooie', 'Mario Kart'}
  ```
  * Example of a set (items have to be unique):
    * `{ 1, 'Lobster', true, false, '1' }`
    * `{}`


### Modifying sets
### Working with sets
### Sets * Iterators
### Quiz: using sets
### Weaksets
### Quiz: Working with weakSets
### Maps
### Creating & Modifying Maps
### Working with Maps
### Looping Through Maps
### WeakMaps
### Promises Intro
### Promises
### Proxies Intro
### Proxies
### Proxies vs. ES5 Getter/Setter
### Proxies Recap
### Generators
### Generators & Iterators
### Sending Data Into/out of a Gen...
### Lesson 3 Summary
