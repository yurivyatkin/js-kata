const getValues = (arrays, indexes) => {
  if (!(arrays instanceof Array) || !(indexes instanceof Array))
    throw new Error('Both arguments have to be arrays!');
  if (arrays.length !== indexes.length)
    throw new Error('Arrays of equal lengths are exepected!');
  return arrays.map(
    (ary, idx) => (indexes[idx] < ary.length ? ary[indexes[idx]] : 'stop')
  );
};

const getMinPos = ary => {
  const start = ary.reduce(
    (acc, item, idx) =>
      item !== 'stop' && typeof acc.pos === 'undefined'
        ? { min: item, pos: idx }
        : acc,
    { min: undefined, pos: undefined }
  );
  const reducer = (acc, item, idx) =>
    item !== 'stop' && item < acc.min ? { min: item, pos: idx } : acc;
  return ary.reduce(reducer, start);
};

const below = (ary1, ary2) => {
  if (!(ary1 instanceof Array) || !(ary2 instanceof Array))
    throw new Error('Both arguments have to be arrays!');
  if (ary1.length !== ary2.length)
    throw new Error('Arrays of equal lengths are exepected!');
  if (ary1.length === 0) return false;
  const difference = ary2.map((item, index) => item - ary1[index]);
  return difference.reduce((acc, item) => acc + item) > 0;
};

const mergeSortedArrays = (...arrays) => {
  const result = [];
  const lengths = arrays.map(ary => ary.length);
  const indexes = arrays.map(() => 0);
  while (below(indexes, lengths)) {
    const { min, pos } = getMinPos(getValues(arrays, indexes));
    result.push(min);
    indexes[pos] += 1;
  }
  return result;
};

module.exports = {
  below,
  getMinPos,
  getValues,
  mergeSortedArrays,
};
