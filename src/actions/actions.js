const CHANGE_FILTER = 'CHANGE_FILTER';
const ADD_POKEMON = 'ADD_POKEMON';

const changeFilter = filter => ({
  type: CHANGE_FILTER,
  payload: filter,
});

const addPokemon = pokemon => ({
  type: ADD_POKEMON,
  payload: pokemon,
});

export {
  CHANGE_FILTER, changeFilter, ADD_POKEMON, addPokemon,
};
