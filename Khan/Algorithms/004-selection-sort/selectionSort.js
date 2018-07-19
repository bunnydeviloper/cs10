
// Selection sort loops over positions in the array.
// For each position, it finds the index of the minimum value
// in the subarray starting at that position.
// Then it swaps the values at the position and at the minimum index.
// Write selection sort, making use of the swap and indexOfMinimum functions.

const swap = (array, firstIndex, secondIndex) => {
  let temp = array[firstIndex];
  array[firstIndex] = array[secondIndex];
  array[secondIndex] = temp;
};

const indexOfMin = (array, startIndex) => {
  let minValue = array[startIndex];
  let minIndex = startIndex;
  for (let i = startIndex + 1; i < array.length; i++) {
    if (array[i] < minValue) {
      minIndex = i;
      minValue = array[i];
    }
  }
  return minIndex;
};

const selectionSort = (array) => {
  let minIndex;
  for (let i=0; i < array.length; i++) {
    minIndex = indexOfMin(array, i);
    swap(array, i, minIndex);
  }

};

const array = [22, 11, 99, 88, 8, 7, 42];
selectionSort(array);
console.log(`Array after sorting: ${array}`);

const another = [-1, 3, 0, 5, 8];
selectionSort(another);
console.log(`Array after sorting: ${another}`);
