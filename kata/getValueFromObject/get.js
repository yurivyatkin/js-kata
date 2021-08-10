const get = (keySequence, nestedObject) =>
  keySequence === ''
    ? nestedObject
    : keySequence
        .split('.')
        .reduce(
          (currentValue, key) => currentValue && currentValue[key],
          nestedObject
        );

module.exports = { get };
