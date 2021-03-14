import { addPokemon } from '../actions/actions';

const URL = 'https://pokeapi.co/api/v2/';

export const pokemonByCategory = async (store, categoryId) => {
  await fetch(`${URL}type/${categoryId}`)
    .then(response => response.json())
    .then(result => store.dispatch(addPokemon(result.results)));
};

export const allPokemons = async store => {
  await fetch(`${URL}pokemon?offset=0&limit=1118`)
    .then(response => response.json())
    .then(result => store.dispatch(addPokemon(result.results)));
};
