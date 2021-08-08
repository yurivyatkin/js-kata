// https://stackoverflow.com/a/25715455/1008341
function isObject(item) {
  return typeof item === 'object' && !Array.isArray(item) && item !== null;
}

const get = (keySequence, nestedObject) => {
  if (keySequence === '') {
    return nestedObject;
  }
  if (!isObject(nestedObject)) {
    return undefined;
  }
  const keys = keySequence.split('.');
  let currentKey = keys.shift();
  let currentValue = nestedObject[currentKey];
  while (currentKey && currentValue && isObject(currentValue)) {
    currentKey = keys.shift();
    currentValue = currentValue[currentKey];
  }
  return currentValue;
};

module.exports = { get };
