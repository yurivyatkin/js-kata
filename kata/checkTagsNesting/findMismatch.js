const findMismatch = tagTokens => {
  const matchStack = ['#'];
  let mismatch = null;
  let found;
  try {
    tagTokens.forEach(tagToken => {
      if (tagToken.closing) {
        if (tagToken.tag === matchStack[matchStack.length - 1]) {
          matchStack.pop();
        } else {
          found = tagToken.tag;
          throw new Error('A mismatch found!');
        }
      } else {
        matchStack.push(tagToken.tag);
      }
    });
  } catch (e) {
    mismatch = {
      expected: matchStack[matchStack.length - 1],
      found,
    };
    return mismatch;
  }
  if (matchStack[matchStack.length - 1] !== '#') {
    mismatch = {
      expected: matchStack[matchStack.length - 1],
      found: '#',
    };
  }
  return mismatch;
};

module.exports = {
  findMismatch,
};
