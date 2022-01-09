/**
 * Returns the majority vote of an array of strings, or null.
 * @param {Array} arr
 * @returns {String || null}
 */
function majorityVote(arr) {
  return (
    [...new Set(arr)].filter(
      a => arr.filter(b => b === a).length > arr.length / 2
    )[0] || null
  );
}

module.exports = { majorityVote };
