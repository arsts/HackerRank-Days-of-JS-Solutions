

/*
 * Modify and return the array so that all even elements are doubled and all odd elements are tripled.
 * 
 * Parameter(s):
 * nums: An array of numbers.
 */
function modifyArray(nums) {
  const result = nums.map(num => {
    if (num % 2 === 0) {
      return num * 2;
    } else if (num % 2 === 1) {
      return num * 3;
    }
  })
  return result;

}

