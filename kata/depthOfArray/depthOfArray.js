/**
 * Calculates the depth of an array.
 * @param {Array} arr
 */
function depth(arr) {
  return arr.reduce(
    (d, v) => Math.max(d, Array.isArray(v) ? depth(v) + 1 : 1),
    1
  );
}

module.exports = { depth };
