const { rotate } = require('./rotateMatrixClockwise');

// Tests as in Edabit.com
//
// Test.assertSimilar(rotate([[1, 2, 3], [4, 5, 6], [7, 8, 9]]), [[7, 4, 1], [8, 5, 2], [9, 6, 3]])
// Test.assertSimilar(rotate([["a", "b", "c"], ["d", "e", "f"], ["g", "h", "i"]]), [["g", "d", "a"], ["h", "e", "b"], ["i", "f", "c"]])

describe('rotate', () => {
  it('should return [[7, 4, 1], [8, 5, 2], [9, 6, 3]] for [[1, 2, 3], [4, 5, 6], [7, 8, 9]]', () => {
    expect(rotate([[1, 2, 3], [4, 5, 6], [7, 8, 9]])).toEqual([
      [7, 4, 1],
      [8, 5, 2],
      [9, 6, 3],
    ]);
  });
  it('should return [["g", "d", "a"], ["h", "e", "b"], ["i", "f", "c"]] for [["a", "b", "c"], ["d", "e", "f"], ["g", "h", "i"]]', () => {
    expect(rotate([['a', 'b', 'c'], ['d', 'e', 'f'], ['g', 'h', 'i']])).toEqual(
      [['g', 'd', 'a'], ['h', 'e', 'b'], ['i', 'f', 'c']]
    );
  });
});
