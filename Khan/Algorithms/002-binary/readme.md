# Binary search
* Eg: search for a star in a glossary book of 2M stars

### Implementing binary search of an array
* search for a prime number in an array of primes:
```js
const primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];

function binarySearch(array, target) {
  const n = array.length;
  let min = 0, max = n-1;

  while (something) {

    if (max < min) return -1; // target is not present in array

    let guess = Math.floor((max - min)/2);


    if (array[guess] === target) return guess;
    if (array[guess] < target) min = guess + 1;
    max = guess - 1;
  }
}

// check 67, if 67 is in the primes array, then it is a prime number
binarySearch(primes, 67);
```

### Challenge: binary search


### Running time of binary search

### Practice: running time of binary search
