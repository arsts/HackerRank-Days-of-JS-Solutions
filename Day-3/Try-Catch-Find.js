

/*
 * Complete the reverseString function
 * Use console.log() to print to stdout.
 */
function reverseString(s) {
  try {
    let string = s.split('').reverse().join('');
    console.log(string)
  }
  catch (e) {
    console.log(e.message);
    console.log(s);
  }
}

