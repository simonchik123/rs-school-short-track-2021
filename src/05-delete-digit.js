/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const nArr = String(n).split('');
  const min = Math.min(...nArr.map(Number));
  const pos = nArr.indexOf(String(min));
  nArr.splice(pos, 1);

  return Number(nArr.join(''));
}

module.exports = deleteDigit;
