const CHANGE_FILTER = 'CHANGE_FILTER';
const ADD_POKEMON = 'ADD_POKEMON';
const CATEGORY_POKEMON = 'CATEGORY_POKEMON';

const changeFilter = filter => ({
  type: CHANGE_FILTER,
  payload: filter,
});

const addPokemon = pokemon => ({
  type: ADD_POKEMON,
  payload: pokemon,
});

const categoryPokemon = catPokemon => ({
  type: CATEGORY_POKEMON,
  payload: catPokemon,
});

export {
  CHANGE_FILTER, changeFilter, ADD_POKEMON, addPokemon, CATEGORY_POKEMON, categoryPokemon,
};
