const swap = (array, firstIndex, secondIndex) => {
  let temp = array[firstIndex];
  array[firstIndex] = array[secondIndex];
  array[secondIndex] = temp;
};

const testArray = [3,4,8];

swap(testArray, 0, 1);

console.log(testArray); // [4.3.8]
