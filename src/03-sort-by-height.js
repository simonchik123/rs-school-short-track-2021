/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const eArr = arr.entries();
  let fArr = arr.filter((el) => el !== -1);
  fArr = fArr.sort((a, b) => a - b);

  /* eslint-disable-next-line */
  for (const key of eArr) {
    if (key[1] === -1) {
      fArr.splice(key[0], 0, key[1]);
    }
  }
  return fArr;
}

module.exports = sortByHeight;
