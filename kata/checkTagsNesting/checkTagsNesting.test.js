const { checkTagsNesting } = require('./checkTagsNesting');
const { testExamples } = require('./testExamples');

describe('checkTagsNesting', () => {
  testExamples.forEach(example => {
    it('does what it should', () => {
      const result = checkTagsNesting(example.input);
      expect(result).toEqual(example.output);
    });
  });
});
