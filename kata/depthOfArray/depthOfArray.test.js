const { depth } = require('./depthOfArray');

// Tests as in Edabit.com
//
// Test.assertEquals(depth([1, 2, 3, 4]), 1)
// Test.assertEquals(depth([1, [2, 3, 4]]), 2)
// Test.assertEquals(depth([1, [2, [3, 4]]]), 3)
// Test.assertEquals(depth([1, [2, [3, [4]]]]), 4)
//
// Test.assertEquals(depth([1, [2, [3, [4]]], 4]), 4)
// Test.assertEquals(depth([1, [2], 3, [4], 5, [6]]), 2)
// Test.assertEquals(depth([1, 2, 3, 4, [[5]], [6], 7]), 3)

describe('depthOfArray', () => {
  it('returns 1 for [1, 2, 3, 4]', () => {
    expect(depth([1, 2, 3, 4])).toBe(1);
  });
  it('returns 2 for [1, [2, 3, 4]]', () => {
    expect(depth([1, [2, 3, 4]])).toBe(2);
  });
  it('returns 3 for [1, [2, [3, 4]]]', () => {
    expect(depth([1, [2, [3, 4]]])).toBe(3);
  });
  it('returns 4 for [1, [2, [3, [4]]]]', () => {
    expect(depth([1, [2, [3, [4]]]])).toBe(4);
  });
  it('returns 4 for [1, [2, [3, [4]]], 4]', () => {
    expect(depth([1, [2, [3, [4]]], 4])).toBe(4);
  });
  it('returns 2 for [1, [2], 3, [4], 5, [6]]', () => {
    expect(depth([1, [2], 3, [4], 5, [6]])).toBe(2);
  });
  it('returns 3 for [1, 2, 3, 4, [[5]], [6], 7]', () => {
    expect(depth([1, 2, 3, 4, [[5]], [6], 7])).toBe(3);
  });
});
