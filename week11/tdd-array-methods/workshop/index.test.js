// TDD example
test('double(2) should be 4', () => {
  equal(double(2), 4);
});

test('double(2) should be 4', () => {
  equal(double(4), 8);
});

// testing map()

test('map() takes an array as an argument', () => {
  const result = map([], () => {});
  equal(Array.isArray(result), true);
});
test('map() should return an array with the same number of elements', () => {
  const result = map([1], () => {});
  equal(result.length, 1);
});

test('map() should transform each element of the array using the fn argument', () => {
  const result = map([1], (x) => x + 1);
  equal(result[0], 2);
});
