/**
 * Rotates a matrix 90 degrees clockwise
 * @param {any[][]} arr
 */
// eslint-disable-next-line no-unused-vars
function rotate(arr) {
  // Determine the size of the matrix:
  const m = arr.length; // assuming it is an array
  const n = arr[0].length; // assuming that all the elements are arrays of the same length
  const result = Array(m)
    .fill()
    .map(() => Array(n));
  for (let i = 0; i < m; i += 1) {
    for (let j = 0; j < n; j += 1) {
      result[i][j] = arr[n - j - 1][i];
    }
  }
  return result;
}

module.exports = { rotate };
