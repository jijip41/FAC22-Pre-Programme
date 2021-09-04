function double(n) {
  return n * 2;
}

function map(array, fn) {
  if (!Array.isArray(array)) return 'please enter an array';
  if (typeof fn !== 'function') return 'please enter a function';
  return 'passed!';
}
