const { findMismatch } = require('./findMismatch');
const { testExamples } = require('./testExamples');

describe('findMismatch', () => {
  testExamples.forEach(example => {
    it('does what it should', () => {
      const mismatch = findMismatch(example.tagTokens);
      expect(mismatch).toEqual(example.mismatch);
    });
  });
});
