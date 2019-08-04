const tagRE = /<\/?[A-Z]>/g;

const getTagTokens = inputString => {
  const tagStrings = inputString.match(tagRE) || [];
  return tagStrings.map(tagString => {
    if (tagString[1] === '/') {
      return {
        tag: tagString[2],
        closing: true,
      };
    }
    return {
      tag: tagString[1],
      closing: false,
    };
  });
};

module.exports = {
  getTagTokens,
};
