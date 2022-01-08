/**
 * Calculates the depth of an array.
 * @param {Array} arr
 */
const depth = arr => (Array.isArray(arr) ? 1 + Math.max(...arr.map(depth)) : 0);

module.exports = { depth };
