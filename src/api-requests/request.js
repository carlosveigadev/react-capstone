const URL = 'https://pokeapi.co/api/v2/';

const categories = [];

export const getCategory = async () => {
  const response = await fetch(`${URL}type`);
  const data = await response.json();
  data.results.forEach(element => {
    categories.push(element.name);
  });
  return categories;
};

export const passCategory = () => {
  getCategory();
  return categories;
};

export const pokemonByCategory = url => {
  const categoryData = fetch(url)
    .then(response => response.json())
    .then(result => result);
  return categoryData;
};
