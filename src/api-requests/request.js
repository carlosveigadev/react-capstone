const URL = 'https://pokeapi.co/api/v2/';

export const pokemonByCategory = action => {
  let categoryId = 1;
  const categoryArray = [];
  while (categoryId <= 18) {
    fetch(`${URL}type/${categoryId}`)
      .then(response => response.json())
      .then(result => categoryArray.push(result.pokemon));
    categoryId += 1;
  }
  action(categoryArray);
};

export const allPokemons = async action => {
  await fetch(`${URL}pokemon?offset=0&limit=1118`)
    .then(response => response.json())
    .then(result => action(result.results));
};
