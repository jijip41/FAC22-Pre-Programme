function double(n) {
  return n * 2;
}

function map(array, fn) {
  const newArray = [];

  for (let i = 0; i < array.length; i++) {
    newArray.push(fn(i));
  }
  return newArray;
}
