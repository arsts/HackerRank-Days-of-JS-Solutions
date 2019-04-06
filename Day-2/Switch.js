

function getLetter(s) {
  let letter;
  // Write your code here
  switch (true) {
    case 'aeiou'.includes(s[0]):
      letter = 'A';
      break;
    case 'bddfg'.includes(s[0]):
      letter = 'B';
      break;
    case 'hjklm'.includes(s[0]):
      letter = 'C';
      break;
    case 'npqrstvwxyz'.includes(s[0]):
      letter = 'D';
      break;
    default:
      console.log('No match')
  }
  return letter;
}
