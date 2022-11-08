const calculator = require('./calculator.js');

describe('calculator', () => {
  test('sum', () => {
    expect(calculator.sum(1, 2)).toBe(3);
  });
  test('subtract', () => {
    expect(calculator.subtract(1, 2)).toBe(-1);
  });
  test('multiply', () => {
    expect(calculator.multiply(1, 2)).toBe(2);
  });
  test('divide', () => {
    expect(calculator.divide(1, 2)).toBe(0.5);
  });
});