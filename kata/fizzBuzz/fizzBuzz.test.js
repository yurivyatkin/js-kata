const { fizzBuzzTest } = require('./fizzBuzz');

describe('fizzBuzzTest', () => {
  it('given a multiple of 3 but not a multiple of 5, returns "Fizz"', () => {
    const result = fizzBuzzTest(6);
    expect(result).toEqual('Fizz');
  });
  it('given a multiple of 5 but not a multiple of 3, returns "Buzz"', () => {
    const result = fizzBuzzTest(10);
    expect(result).toEqual('Buzz');
  });
  it('given a multiple of 3 which is also a multiple of 5, returns "FizzBuzz"', () => {
    const result = fizzBuzzTest(15);
    expect(result).toEqual('FizzBuzz');
  });
  it('given a not a multiple of 3 or 5, returns the input', () => {
    const result = fizzBuzzTest(4);
    expect(result).toEqual(4);
  });
});
