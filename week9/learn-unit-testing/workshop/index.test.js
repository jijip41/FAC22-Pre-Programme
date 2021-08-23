test('The URL is correct', () => {
  if (makeUrl('pikachu') === 'https://pokeapi.co/api/v2/pikachu') {
    return console.log('correct');
  } else {
    return console.error('wrong');
  }
});
