/**
 * Calculates the depth of an array.
 * @param {Array} arr
 */
function depth(arr) {
  let d = 1;
  for (let i = 0; i < arr.length; i += 1) {
    if (Array.isArray(arr[i])) {
      d = Math.max(d, depth(arr[i]) + 1);
    }
  }
  return d;
}

module.exports = { depth };
