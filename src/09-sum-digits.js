/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let str = String(n);

  while (str.length > 1) {
    const arr = str.split('');
    str = String(arr.reduce((a, b) => Number(a) + Number(b)));
  }
  return Number(str);
}

module.exports = getSumOfDigits;
