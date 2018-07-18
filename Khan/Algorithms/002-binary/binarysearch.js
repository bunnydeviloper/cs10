const primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];

function binarySearch(array, target) {
  let min = 0, max = array.length - 1;
  let guess;

  while (max >= min) {
    guess = Math.floor((max - min)/2);

    if (array[guess] === target) {
      return guess;
    } else if (array[guess] < target) {
      min = guess + 1;
    } else {
      max = guess - 1;
    }
  }
  return -1;
}

// check 67, if 67 is in the primes array, then it is a prime number
binarySearch(primes, 67);
