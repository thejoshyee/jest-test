const capitalize = require('../code/capitalize.js');

test('capitalizes the entire string', () => {
  expect(capitalize("hello")).toBe("HELLO");
});