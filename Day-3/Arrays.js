

/**
*   Return the second largest number in the array.
*   @param {Number[]} nums - An array of numbers.
*   @return {Number} The second largest number in the array.
**/
function getSecondLargest(nums) {
  // Complete the function

  let numsSorted = nums.sort((a, b) => a > b).filter((num, i, arr) => {
    return num != arr[i + 1]
  })
  let num = numsSorted[numsSorted.length - 2]
  return num;

}
