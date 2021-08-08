const { get } = require('./get');

describe('get', () => {
  it('throws if the first argument is not a string #1', () => {
    expect(() => {
      get(123, { a: 'b' });
    }).toThrow();
  });

  it('throws if the first argument is not a string #2', () => {
    expect(() => {
      get([1], { 1: 'a' });
    }).toThrow();
  });

  it('throws if the first argument is not a string #3', () => {
    const keySequence = { 1: 1 };
    expect(() => {
      get(keySequence, { 1: 'a' });
    }).toThrow();
  });

  it('throws if the first argument is not a string #4', () => {
    expect(() => {
      get(() => 1, { 1: 'a' });
    }).toThrow();
  });

  it('throws if the first argument is not a string #5', () => {
    expect(() => {
      get(Symbol(1), { 1: 'a' });
    }).toThrow();
  });

  it('throws if the first argument is not a string #6', () => {
    expect(() => {
      get(true, { 1: 'a' });
    }).toThrow();
  });

  it('returns undefined for empty objects', () => {
    const keySequence = 'a.b.c';
    const nestedObject = {};
    const result = get(keySequence, nestedObject);
    expect(result).toBeUndefined();
  });

  it('returns undefined if the second argument is not an object', () => {
    const keySequence = 'a.b.c';
    const nestedObject = 1;
    const result = get(keySequence, nestedObject);
    expect(result).toBeUndefined();
  });

  it('returns the given object for empty paths #1', () => {
    const keySequence = '';
    const nestedObject = { a: { b: 1 } };
    const result = get(keySequence, nestedObject);
    expect(result).toEqual(nestedObject);
  });

  it('returns the given object for empty paths #2', () => {
    const keySequence = '';
    const nestedObject = {};
    const result = get(keySequence, nestedObject);
    expect(result).toEqual(nestedObject);
  });

  it('returns the value when the path reaches it #1', () => {
    const keySequence = 'red.big.apple';
    const nestedObject = { red: { big: { apple: 'Red Big Apple' } } };
    const result = get(keySequence, nestedObject);
    expect(result).toEqual('Red Big Apple');
  });

  it('returns the value when the path reaches it #2', () => {
    const keySequence = 'a';
    const nestedObject = { a: 1 };
    const result = get(keySequence, nestedObject);
    expect(result).toEqual(1);
  });

  it('returns the value when the path reaches it #3', () => {
    const keySequence = 'a';
    const nestedObject = { a: undefined };
    const result = get(keySequence, nestedObject);
    expect(result).toEqual(undefined);
  });

  it('returns the value when the path reaches it #4', () => {
    const keySequence = 'a';
    const nestedObject = { a: null };
    const result = get(keySequence, nestedObject);
    expect(result).toEqual(null);
  });

  it('returns the value when the path reaches it #5', () => {
    const keySequence = 'a.b';
    const nestedObject = { a: { b: null } };
    const result = get(keySequence, nestedObject);
    expect(result).toEqual(null);
  });

  it('returns undefined when the path misses it', () => {
    const keySequence = 'red.fast.fancy.car';
    const nestedObject = { red: { big: { apple: 'Red Big Apple' } } };
    const result = get(keySequence, nestedObject);
    expect(result).toBeUndefined();
  });
});
