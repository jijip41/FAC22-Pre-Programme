test('The URL is correct', () => {
  equal(makeUrl('pikachu'), 'https://pokeapi.co/api/v2/pikachu');
});

test('Object equality', () => {
  equal(
    searchParamsToObject('name=oliver&email=hello@oliverjam.es').name,
    'oliver'
  );
  equal(
    searchParamsToObject('name=oliver&email=hello@oliverjam.es').email,
    'hello@oliverjam.es'
  );
  console.log(searchParamsToObject('name=oliver&email=hello@oliverjam.es'));
});

test('Leap year', () => {
  equal(isLeapYear(2020), true);
  equal(isLeapYear('hello'), false);
  equal(isLeapYear(-1000), false);
  equal(isLeapYear(2000), true);
  equal(isLeapYear(1900), false);
});
// function equal(actual, expected, message) {
//   if (actual === expected) {
//     const defaultMessage = `Expected ${expected} and received ${actual}`;
//     console.info("Pass: " + (message || defaultMessage));
//   } else {
//     const defaultMessage = `Expected ${expected} but received ${actual} instead`;
//     console.error("Fail: " + (message || defaultMessage));
//   }
// }

// function notEqual(actual, expected, message) {
//   if (actual !== expected) {
//     const defaultMessage = `${expected} is different to ${actual}`;
//     console.info("Pass: " + (message || defaultMessage));
//   } else {
//     const defaultMessage = `${expected} is the same as ${actual}`;
//     console.error("Fail: " + (message || defaultMessage));
//   }
// }

// function test(name, testFunction) {
//   console.group(name);
//   testFunction();
//   console.groupEnd(name);
// }
