const analyzeArray = require('../code/analyzeArray.js');

test('check whole object', () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
      average: 4, 
      min: 1, 
      max: 8, 
      length: 6
    });
});

test('check min value', () => {
    expect(analyzeArray([1,2,3,4]).min).toBe(1);
});

test('check max value', () => {
    expect(analyzeArray([1,2,3,4]).max).toBe(4);
});

test('check max length', () => {
    expect(analyzeArray([1,2,3,4]).length).toBe(4);
});

test('check average', () => {
    expect(analyzeArray([1,2,3,4]).average).toBe(2.5);
});  