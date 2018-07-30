# Lesson 11: Built-ins

### New built-ins
### Symbols intro
* Symbols are the latest addition to primitive data types
  * Primitive: numbers, strings, booleans, null, undefined
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

### Symbols
### Iteration & Iterable protocols
### Sets
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
