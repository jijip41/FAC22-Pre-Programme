// "pikachu" -> "https://pokeapi.co/api/v2/pikachu"

function makeUrl(name) {
  return 'https://pokeapi.co/api/v2/' + name;
}

function searchParamsToObject(url) {
  const obj = new URLSearchParams(url);
  const entries = obj.entries();
  const params = Object.fromEntries(entries);
  return params;
}

function isLeapYear(num) {
  if (typeof num === 'string') {
    return false;
  }
  if (num < 0) {
    return false;
  }
  if (num % 400 === 0) {
    return true;
  }
  if (num % 100 === 0) {
    return false;
  }
  if (num % 4 === 0) {
    return true;
  }
}
