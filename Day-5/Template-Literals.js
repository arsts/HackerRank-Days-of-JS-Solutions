

/*
 * Determine the original side lengths and return an array:
 * - The first element is the length of the shorter side
 * - The second element is the length of the longer side
 * 
 * Parameter(s):
 * literals: The tagged template literal's array of strings.
 * expressions: The tagged template literal's array of expression values (i.e., [area, perimeter]).
 */
function sides(literals, ...expressions) {
  const val = [...expressions]
  const result = [];
  const s1 = (val[1] + Math.sqrt(Math.pow(val[1], 2) - (16 * val[0]))) / 4;
  const s2 = (val[1] - Math.sqrt(Math.pow(val[1], 2) - (16 * val[0]))) / 4;
  result.push(s1, s2);
  result.sort()
  return result;

  // console.log(s2)

}

