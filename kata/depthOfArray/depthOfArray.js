/**
 * Calculates the depth of an array.
 * @param {Array} arr
 */
function depth(arr) {
  return arr.reduce(
    (d, v) => (Array.isArray(v) ? Math.max(d, depth(v) + 1) : d),
    1
  );
}

module.exports = { depth };
