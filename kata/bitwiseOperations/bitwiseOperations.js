/**
 * @param {number} n1
 * @param {number} n2
 * @returns {number}
 */
function bitwiseAND(n1, n2) {
  const n1string = n1.toString(2);
  const n2string = n2.toString(2);
  const maxLength = Math.max(n1string.length, n2string.length);
  const n1stringPadded = n1string.padStart(maxLength, '0');
  const n2stringPadded = n2string.padStart(maxLength, '0');
  const result = n1stringPadded
    .split('')
    .map((char, index) => (char === n2stringPadded[index] ? char : '0'));
  return parseInt(result.join(''), 2);
}

/**
 * @param {number} n1
 * @param {number} n2
 * @returns {number}
 */
function bitwiseOR(n1, n2) {
  const n1string = n1.toString(2);
  const n2string = n2.toString(2);
  const maxLength = Math.max(n1string.length, n2string.length);
  const n1stringPadded = n1string.padStart(maxLength, '0');
  const n2stringPadded = n2string.padStart(maxLength, '0');
  const result = n1stringPadded
    .split('')
    .map(
      (char, index) =>
        char === '0' && n2stringPadded[index] === '0' ? '0' : '1'
    );
  return parseInt(result.join(''), 2);
}

// eslint-disable-next-line no-unused-vars
function bitwiseXOR(n1, n2) {}

module.exports = { bitwiseAND, bitwiseOR, bitwiseXOR };
