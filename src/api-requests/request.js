const URL = 'https://pokeapi.co/api/v2/';

export const getCategory = () => fetch(`${URL}type`)
  .then(response => response.json())
  .then(result => result);

export const pokemonByCategory = url => {
  const categoryData = fetch(url)
    .then(response => response.json())
    .then(result => result);
  return categoryData;
};
