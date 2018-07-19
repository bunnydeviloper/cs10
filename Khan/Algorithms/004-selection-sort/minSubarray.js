const indexOfMinimum = (array, startIndex) => {
    // Set initial values for minValue and minIndex,
    // based on the leftmost entry in the subarray:
    let minValue = array[startIndex];
    let minIndex = startIndex;

    // Loop over items starting with startIndex,
    // updating minValue and minIndex as needed:
    for (let i = startIndex + 1; i < array.length; i++) {
        if (minValue > array[i]) {
            minValue = array[i];
            minIndex = i;
        }
    }
    return minIndex;
};

const array = [18, 6, 66, 44, 9, 22, 14];
const index = indexOfMinimum(array, 2);

//  For the test array [18, 6, 66, 44, 9, 22, 14],
//  the value 9 is the smallest of [..66, 44, 9, 22, 14]
//  Since 9 is at index 4 in the original array,
//  "index" has value 4
console.log("The index of the minimum value of the subarray starting at index 2 is " + index + "."  );
console.log(indexOfMinimum(array, 2) === 4); // true
console.log(indexOfMinimum(array, 4) === 2); // false, the subarray start from index 4
console.log(indexOfMinimum(array, 5) === 6); // true
