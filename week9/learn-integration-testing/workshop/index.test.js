test('check add', () => {
  equal(calculate(1, '+', 201), 202);
});
test('check subtrac', () => {
  equal(calculate(1, '-', 201), -200);
});
test('check multiply', () => {
  equal(calculate(1, '*', 201), 201);
});
test('check devide', () => {
  equal(calculate(10, '/', 4), 2.5);
});
test('check else', () => {
  equal(calculate(9, '_', 4), 'Please enter a valid sign (+, -, *, /)');
});
