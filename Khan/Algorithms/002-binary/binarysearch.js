const primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];

function binarySearch(array, target) {
  let min = 0;
  let max = array.length - 1;
  let index;
  let steps = 1;

  while (max >= min) {
    index = Math.floor((max + min) / 2);
    if (array[index] === target) {
      console.log('Found it in ', steps, ' steps, the corresponding index is ', index);
      return index;
    } else if (array[index] < target) {
      steps++;
      min = index + 1;
    } else {
      steps++;
      max = index - 1;
    }
  }
  console.log('Cannot find it!');
  return -1;
};

// check 67, if 67 is in the primes array, then it is a prime number
binarySearch(primes, 67);
binarySearch(primes, 73);
