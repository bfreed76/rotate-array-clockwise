function rotateArray(arr, k) {

  while (k > 0 && arr.length > 0) {
    let movedVar = arr[arr.length-1]
    arr.pop(movedVar)
    arr.unshift(movedVar)
    --k
  }
  return arr
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [4, 1, 2, 3]");
  console.log("=>", rotateArray([1, 2, 3, 4], 1));

  console.log("");

  console.log("Expecting: [2, 3, 1]");
  console.log("=>", rotateArray([1, 2, 3], 2));

  console.log("");

  console.log("Expecting: [1, 2, 3]");
  console.log("=>", rotateArray([1, 2, 3], 3));

}

module.exports = rotateArray;

// Remove the last value from the array and unshift it to the front of the array.
// Do this n times where n is the function arguement. 
