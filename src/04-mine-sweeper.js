/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const resArr = [];
  for (let i = 0; i < matrix.length; i++) {
    resArr.push([]);
    for (let y = 0; y < matrix[i].length; y++) {
      let count = 0;
      for (let n = -1; n <= 1; n++) {
        for (let m = -1; m <= 1; m++) {
          if (m !== 0 || n !== 0) {
            if (matrix[i + n] && matrix[i + n][y + m]) count++;
          }
        }
      }
      resArr[i].push(count);
    }
  }
  return resArr;
}

module.exports = minesweeper;
