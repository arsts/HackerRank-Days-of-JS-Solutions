

/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
  const vowels = 'aeiou';
  var cons = '';

  for (var i = 0; i < s.length; i++) {
    if (vowels.includes(s[i])) {
      console.log(s[i]);
    }
    else {
      cons += s[i] + '\n';
    }
  }

  console.log(cons);
}

