import { ADD_POKEMON } from '../actions/actions';

const pokeReducer = (state = '', action) => {
  switch (action.type) {
    case ADD_POKEMON:
      return action.payload;

    default:
      return state;
  }
};

export default pokeReducer;
