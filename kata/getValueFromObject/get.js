const get = (keySequence, nestedObject) => {
  const keys = keySequence.split('.');
  let currentKey = keys.shift();
  let currentValue = nestedObject;
  while (currentKey && currentValue) {
    currentValue = currentValue[currentKey];
    currentKey = keys.shift();
  }
  return currentValue;
};

module.exports = { get };
