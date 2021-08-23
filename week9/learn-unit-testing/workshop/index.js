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
