const caesarCipher = require('../code/caesarCipher.js');

test('hello world equals mjqqt btwqi with a shift of 5', () => {
  expect(caesarCipher("hello world", 5)).toBe("mjqqt btwqi");
});