const { bitwiseAND, bitwiseOR, bitwiseXOR } = require('./bitwiseOperations');

// Tests as in Edabit.com
//
// Test.assertEquals(bitwiseAND(7, 12), 4)
// Test.assertEquals(bitwiseOR(7, 12), 15)
// Test.assertEquals(bitwiseXOR(7, 12), 11)
//
// Test.assertEquals(bitwiseAND(32, 17), 0)
// Test.assertEquals(bitwiseOR(32, 17), 49)
// Test.assertEquals(bitwiseXOR(32, 17), 49)
//
// Test.assertEquals(bitwiseAND(13, 19), 1)
// Test.assertEquals(bitwiseOR(13, 19), 31)
// Test.assertEquals(bitwiseXOR(13, 19), 30)

// Write tests for bitwiseAND
describe('bitwiseAND', () => {
  it('should return 4 for 7 and 12', () => {
    expect(bitwiseAND(7, 12)).toEqual(4);
  });
  it('should return 0 for 32 and 17', () => {
    expect(bitwiseAND(32, 17)).toEqual(0);
  });
  it('should return 1 for 13 and 19', () => {
    expect(bitwiseAND(13, 19)).toEqual(1);
  });
});

// Write tests for bitwiseOR
describe('bitwiseOR', () => {
  xit('should return 15 for 7 and 12', () => {
    expect(bitwiseOR(7, 12)).toEqual(15);
  });
  xit('should return 49 for 32 and 17', () => {
    expect(bitwiseOR(32, 17)).toEqual(49);
  });
  xit('should return 30 for 13 and 19', () => {
    expect(bitwiseOR(13, 19)).toEqual(30);
  });
});

// Write tests for bitwiseXOR
describe('bitwiseXOR', () => {
  xit('should return 11 for 7 and 12', () => {
    expect(bitwiseXOR(7, 12)).toEqual(11);
  });
  xit('should return 49 for 32 and 17', () => {
    expect(bitwiseXOR(32, 17)).toEqual(49);
  });
  xit('should return 30 for 13 and 19', () => {
    expect(bitwiseXOR(13, 19)).toEqual(30);
  });
});
