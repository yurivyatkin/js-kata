/**
 * Returns the majority vote of an array of strings, or null.
 * @param {Array} arr
 * @returns {String || null}
 */
function majorityVote(arr) {
  const counts = {};
  for (let i = 0; i < arr.length; i++) {
    if (counts[arr[i]] === undefined) {
      counts[arr[i]] = 1;
    } else {
      counts[arr[i]]++;
    }
  }
  const max = Math.max(...Object.values(counts));
  const keys = Object.keys(counts);
  for (let i = 0; i < keys.length; i++) {
    if (counts[keys[i]] === max && max > Math.floor(arr.length / 2)) {
      return keys[i];
    }
  }
  return null;
}

module.exports = { majorityVote };
