export const pokemonByCategory = url => {
  const categoryData = fetch(url)
    .then(response => response.json())
    .then(result => result);
  return categoryData;
};

export const allPokemons = () => {
  const pokeData = fetch('https://pokeapi.co/api/v2/pokemon?offset=0&limit=1118')
    .then(response => response.json())
    .then(result => result);
  return pokeData;
};
