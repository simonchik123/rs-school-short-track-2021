/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const newStr = [];
  let count = 1;
  [...str].forEach((el, index, arr) => {
    if (el !== arr[index + 1]) {
      newStr.push(String(count) + el);
      count = 1;
    }
    if (el === arr[index + 1]) {
      count++;
    }
  });
  return newStr.join('').replace(/1/g, '');
}

module.exports = encodeLine;
