const calculator = require('../code/calculator.js');

test('adds two numbers', () => {
  expect(calculator.add(1,2)).toBe(3);
});

test('subtracts two numbers', () => {
    expect(calculator.subtract(5,1)).toBe(4);
  });

  test('divides two numbers together', () => {
    expect(calculator.divide(4,2)).toBe(2);
  });

  test('multiplies two numbers together', () => {
    expect(calculator.multiply(3,2)).toBe(6);
  });