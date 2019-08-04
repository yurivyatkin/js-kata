const { findMismatch } = require('./findMismatch');
const { getTagTokens } = require('./getTagTokens');

const getTag = tagString => (tagString === '#' ? tagString : `</${tagString}>`);

const checkTagsNesting = taggedString => {
  const mismatch = findMismatch(getTagTokens(taggedString));
  if (mismatch) {
    const expected = getTag(mismatch.expected);
    const found = getTag(mismatch.found);
    return `Expected ${expected} found ${found}`;
  }
  return 'Correctly tagged paragraph';
};

module.exports = {
  checkTagsNesting,
};
