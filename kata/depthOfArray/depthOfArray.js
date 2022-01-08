/**
 * Calculates the depth of an array.
 * @param {Array} arr
 */
const depth = (arr, t = 1) =>
  arr.some(Array.isArray) ? depth(arr.flat(), t + 1) : t;

module.exports = { depth };
