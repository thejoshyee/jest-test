const reverseString = require('../code/reverseString.js');

test('reverses the entire string', () => {
  expect(reverseString("hello")).toBe("olleh");
});