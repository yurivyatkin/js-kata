const {
  below,
  getMinPos,
  getValues,
  mergeSortedArrays,
} = require('./mergeSortedArrays');

describe('below', () => {
  it('handles empty arrays', () => {
    const result = below([], []);
    expect(result).toBe(false);
  });
  it('returns true for [1],[2]', () => {
    const result = below([1], [2]);
    expect(result).toBe(true);
  });
  it('returns true for [1, 2],[2, 3]', () => {
    const result = below([1, 2], [2, 3]);
    expect(result).toBe(true);
  });
  it('returns false for [2, 3],[1, 2]', () => {
    const result = below([2, 3], [1, 2]);
    expect(result).toBe(false);
  });
  it('returns false for [2, 2],[1, 3]', () => {
    const result = below([2, 2], [1, 3]);
    expect(result).toBe(false);
  });
  it('returns false for [2, 2],[2, 2]', () => {
    const result = below([2, 2], [2, 2]);
    expect(result).toBe(false);
  });
  it('returns true for [2, 1],[2, 2]', () => {
    const result = below([2, 1], [2, 2]);
    expect(result).toBe(true);
  });
});

describe('getMinPos', () => {
  it('handles empty arrays', () => {
    const result = getMinPos([]);
    expect(result).toEqual({ min: undefined, pos: undefined });
  });
  it('returns { min: 1, pos: 0 } for [1]', () => {
    const result = getMinPos([1]);
    expect(result).toEqual({ min: 1, pos: 0 });
  });
  it('returns { min: 0, pos: 2 } for [2, 1, 0, 3]', () => {
    const result = getMinPos([2, 1, 0, 3]);
    expect(result).toEqual({ min: 0, pos: 2 });
  });
  it('returns { min: 1, pos: 1 } for [2, 1, "stop", 3]', () => {
    const result = getMinPos([2, 1, 'stop', 3]);
    expect(result).toEqual({ min: 1, pos: 1 });
  });
  it('returns { min: 1, pos: 1 } for ["stop", 1, "stop", 3]', () => {
    const result = getMinPos(['stop', 1, 'stop', 3]);
    expect(result).toEqual({ min: 1, pos: 1 });
  });
});

describe('getValues', () => {
  it('returns stops for empty arrays #1', () => {
    const result = getValues([[], []], [0, 0]);
    expect(result).toEqual(['stop', 'stop']);
  });
  it('returns stops for empty arrays #2', () => {
    const result = getValues([[], []], [1, 2]);
    expect(result).toEqual(['stop', 'stop']);
  });
  it("returns stops when all the indices exceed arrays' lengths", () => {
    const result = getValues([[1], [2, 3]], [2, 4]);
    expect(result).toEqual(['stop', 'stop']);
  });
  it("returns a stop when an index exceeds an array's length", () => {
    const result = getValues([[1], [2, 3]], [2, 1]);
    expect(result).toEqual(['stop', 3]);
  });
  it('returns correct values #1', () => {
    const result = getValues([[1], [2, 3]], [0, 1]);
    expect(result).toEqual([1, 3]);
  });
  it('returns correct values #2', () => {
    const result = getValues([[1], [2, 3]], [0, 0]);
    expect(result).toEqual([1, 2]);
  });
});

describe('mergeSortedArrays', () => {
  it('handles empty arrays', () => {
    const result = mergeSortedArrays([], []);
    expect(result).toEqual([]);
  });
  it('merges [1] and [2] into [1, 2]', () => {
    const result = mergeSortedArrays([1], [2]);
    expect(result).toEqual([1, 2]);
  });
  it('merges [1, 2] and [1, 2] into [1, 1, 2, 2]', () => {
    const result = mergeSortedArrays([1, 2], [1, 2]);
    expect(result).toEqual([1, 1, 2, 2]);
  });
  it('merges [1, 1] and [2, 2] into [1, 1, 2, 2]', () => {
    const result = mergeSortedArrays([1, 1], [2, 2]);
    expect(result).toEqual([1, 1, 2, 2]);
  });
  it('merges [1, 1, 1] and [2, 2] into [1, 1, 1, 2, 2]', () => {
    const result = mergeSortedArrays([1, 1, 1], [2, 2]);
    expect(result).toEqual([1, 1, 1, 2, 2]);
  });
  it('merges [1, 1] and [2, 2, 2] into [1, 1, 2, 2, 2]', () => {
    const result = mergeSortedArrays([1, 1], [2, 2, 2]);
    expect(result).toEqual([1, 1, 2, 2, 2]);
  });
  it('merges [1, 2, 3, 4] and [5, 6] into [1, 2, 3, 4, 5, 6]', () => {
    const result = mergeSortedArrays([1, 2, 3, 4], [5, 6]);
    expect(result).toEqual([1, 2, 3, 4, 5, 6]);
  });
  it('merges [] and [5, 6] into [5, 6]', () => {
    const result = mergeSortedArrays([], [5, 6]);
    expect(result).toEqual([5, 6]);
  });
  it('merges [3, 4] and [] into [3, 4]', () => {
    const result = mergeSortedArrays([3, 4], []);
    expect(result).toEqual([3, 4]);
  });
  it('merges [2, 4, 25] and [3, 6, 18, 99] into [2, 3, 4, 6, 18, 25, 99]', () => {
    const result = mergeSortedArrays([2, 4, 25], [3, 6, 18, 99]);
    expect(result).toEqual([2, 3, 4, 6, 18, 25, 99]);
  });
  it('merges [-1, 0, 1] and [-2, 2] into [-2, -1, 0, 1, 2]', () => {
    const result = mergeSortedArrays([-1, 0, 1], [-2, 2]);
    expect(result).toEqual([-2, -1, 0, 1, 2]);
  });
  it('merges [1, 3, 5] and [2, 4] into [1, 2, 3, 4, 5]', () => {
    const result = mergeSortedArrays([1, 3, 5], [2, 4]);
    expect(result).toEqual([1, 2, 3, 4, 5]);
  });
  it('merges [], [1, 3, 5], [2, 4], [], [100] into [1, 2, 3, 4, 5, 100]', () => {
    const result = mergeSortedArrays([], [1, 3, 5], [2, 4], [], [100]);
    expect(result).toEqual([1, 2, 3, 4, 5, 100]);
  });
});
