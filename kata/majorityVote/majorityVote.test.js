const { majorityVote } = require('./majorityVote');

// Tests as in Edabit.com
//
// Test.assertEquals(majorityVote(["A", "B", "B", "B", "A", "A"]), null)
// Test.assertEquals(majorityVote(["B", "B", "B"]), "B")
// Test.assertEquals(majorityVote(["A", "B", "B"]), "B")
// Test.assertEquals(majorityVote(["A", "A", "B"]), "A")
// Test.assertEquals(majorityVote(["A", "A", "A", "B", "C", "A"]), "A")
// Test.assertEquals(majorityVote(["B", "A", "B", "B", "C", "A", "B", "B"]), "B")
// Test.assertEquals(majorityVote(["A", "B", "B", "A", "C", "C"]), null)
// Test.assertEquals(majorityVote(["A", "B"]), null)
// Test.assertEquals(majorityVote(["A"]), "A")
// Test.assertEquals(majorityVote([]), null)

describe('majorityVote', () => {
  xit('returns null for ["A", "B", "B", "B", "A", "A"]', () => {
    expect(majorityVote(['A', 'B', 'B', 'B', 'A', 'A'])).toBe(null);
  });
  xit('returns "B" for ["B", "B", "B"]', () => {
    expect(majorityVote(['B', 'B', 'B'])).toBe('B');
  });
  xit('returns "B" for ["A", "B", "B"]', () => {
    expect(majorityVote(['A', 'B', 'B'])).toBe('B');
  });
  xit('returns "A" for ["A", "A", "B"]', () => {
    expect(majorityVote(['A', 'A', 'B'])).toBe('A');
  });
  xit('returns "A" for ["A", "A", "A", "B", "C", "A"]', () => {
    expect(majorityVote(['A', 'A', 'A', 'B', 'C', 'A'])).toBe('A');
  });
  xit('returns "B" for ["B", "A", "B", "B", "C", "A", "B", "B"]', () => {
    expect(majorityVote(['B', 'A', 'B', 'B', 'C', 'A', 'B', 'B'])).toBe('B');
  });
  xit('returns null for ["A", "B", "B", "A", "C", "C"]', () => {
    expect(majorityVote(['A', 'B', 'B', 'A', 'C', 'C'])).toBe(null);
  });
  xit('returns null for ["A", "B"]', () => {
    expect(majorityVote(['A', 'B'])).toBe(null);
  });
  xit('returns "A" for ["A"]', () => {
    expect(majorityVote(['A'])).toBe('A');
  });
  xit('returns null for []', () => {
    expect(majorityVote([])).toBe(null);
  });
});
