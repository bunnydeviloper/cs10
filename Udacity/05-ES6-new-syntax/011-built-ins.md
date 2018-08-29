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
  * `{ 1, 'Lobster', true, false, '1' }`

### Modifying sets
* the biggest different between a set and an array are:
  * sets are not indexed-based
  * items in a set can't be accessed individually
  ```js
  const game = new Set(); // create an empty Set 'games' with no items
  console.log(games); // Set {}
  const games = new Set(['Super Mario Bros.', 'Banjo-Kazooie', 'Mario Kart', 'Super Mario Bros.']);
  console.log(games); // Set {'Super Mario Bros.', 'Banjo-Kazooie', 'Mario Kart'}
  // note, the 'Super Mario Bros.' was duplicate so it was removed

  games.add('Banjo-Tooie'); // add() returns the Set if it was successfully added
  games.add('Age of Empires');
  games.delete('Super Mario Bros.'); // delete() returns Boolean ('true' or 'false')

  console.log(games); // new Set {'Banjo-Kazooie', 'Mario Kart', 'Banjo-Tooie', 'Age of Enpires'}

  // to delete all items from a Set
  games.clear();
  console.log(game); // new Set {}

  // if you try to '.add()' duplicate item, there's no eror, but it won't be added
  // if you try to '.delete()' item not in Set, there's no eror, and the Set remain unchanged
  ```

### Working with sets
### Sets & Iterators (loop)
* `.size` property returns the number of items in a Set
* `.has()` method check if an item exists in a Set (boolean)
* `.value()` method return all values in a Set
* `.keys()` method is an alias for the `.value()` method
  ```js
  const months = new Set(['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']);

  console.log(months.size); // 12, note: can't use '.length'
  console.log(months.has('September')); // true
  console.log(months.values()); // SetIterator {'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'}

  const iterator = months.value();
  iterator.next(); // Objects {value: 'January', done: false}
  iterator.next(); // Objects {value: 'February', done: false}
  // when 'done' equals 'true', that's the end of the Set

  // iterate using 'for... of' loop
  for (const eachMonth of months) { console.log(eachMonth); }

  ```

### Quiz: using sets
