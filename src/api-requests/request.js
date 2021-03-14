const URL = 'https://pokeapi.co/api/v2/';

const saveResult = result => {
  const data = result;
  return data;
};

export const pokemonByCategory = async categoryId => {
  const categoryData = await fetch(`${URL}type/${categoryId}`)
    .then(response => response.json())
    .then(result => saveResult(result));
  console.log(categoryData);
  return categoryData;
};

export const allPokemons = async () => {
  const pokeData = await fetch(`${URL}pokemon?offset=0&limit=1118`)
    .then(response => response.json())
    .then(result => result);
  return pokeData.results;
};
