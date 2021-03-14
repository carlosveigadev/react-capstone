import { addPokemon, categoryPokemon } from '../actions/actions';

const URL = 'https://pokeapi.co/api/v2/';

export const pokemonByCategory = store => {
  let categoryId = 1;
  const categoryArray = [];
  while (categoryId <= 18) {
    fetch(`${URL}type/${categoryId}`)
      .then(response => response.json())
      .then(result => categoryArray.push(result.pokemon));
    categoryId += 1;
  }
  store.dispatch(categoryPokemon(categoryArray));
};

export const allPokemons = async store => {
  await fetch(`${URL}pokemon?offset=0&limit=1118`)
    .then(response => response.json())
    .then(result => store.dispatch(addPokemon(result.results)));
};
