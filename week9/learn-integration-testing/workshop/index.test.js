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

test('Testing UI logic', () => {
  const firstInput = document.querySelector('#a');
  firstInput.value = '1';
  const sign = document.querySelector('#sign');
  sign.value = '+';
  const secondInput = document.querySelector('#b');
  secondInput.value = '2';
  const submitButton = document.querySelector('button[type="submit"]');
  submitButton.click();
  const result = document.querySelector('#result');

  equal(result.textContent, '12');
  result.textContent = '';
});
