/**
 * Rotates a matrix 90 degrees clockwise
 * @param {any[][]} arr
 */
function rotate(arr) {
  return arr
    .slice()
    .reverse()
    .map((_, colIndex) => arr.map(row => row[colIndex]).reverse());
}

module.exports = { rotate };
