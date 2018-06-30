const fizzBuzz = num => {
  const fizzTest = num % 3 === 0;
  const buzzTest = num % 5 === 0;
  if (fizzTest && buzzTest) return 'FizzBuzz';
  if (fizzTest) return 'Fizz';
  if (buzzTest) return 'Buzz';
  return num;
};

module.exports = {
  fizzBuzz,
};
