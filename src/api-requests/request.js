const URL = 'https://pokeapi.co/api/v2/';

export const getCategory = async () => {
  let categoryData;
  try {
    const response = await fetch(`${URL}/type`);
    categoryData = await response.json();
  } catch (error) {
    return error;
  }
  return categoryData;
};

export const pokemonByCategory = async url => {
  let categoryData;
  try {
    const response = await fetch(url);
    categoryData = await response.json();
  } catch (error) {
    return error;
  }
  return categoryData.pokemon;
};
