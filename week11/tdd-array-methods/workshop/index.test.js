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

test('map() requires array and fn arguments', () => {
  equal(map(), 'please enter an array');
  equal(map([]), 'please enter a function');
  equal(
    map([1], () => {}),
    'passed!'
  );
});

test('map() should transform each element of the array using the fn argument', () => {
  const result = map([1], (x) => x + 1);
  equal(result[0], 2);
});
