/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  const rowLength = matrix[0].length;
  const arr = matrix.reduce((prev, current) => prev.concat(current));
  let sum = 0;
  arr.forEach((element, index) => {
    if (arr[index - rowLength] !== 0) sum += element;
  });
  return sum;
}

module.exports = getMatrixElementsSum;
