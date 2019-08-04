const { getTagTokens } = require('./getTagTokens');
const { testExamples } = require('./testExamples');

describe('getTagTokens', () => {
  testExamples.forEach(example => {
    it('does what it should', () => {
      const tokens = getTagTokens(example.input);
      expect(tokens).toEqual(example.tagTokens);
    });
  });
});
