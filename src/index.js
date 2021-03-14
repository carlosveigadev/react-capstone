import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './styles/index.css';
import { BrowserRouter } from 'react-router-dom';
import { createStore, combineReducers } from 'redux';
import Routes from './routes/Routes';
import filterReducer from './reducers/filter';
import pokeReducer from './reducers/pokemon';
import catReducer from './reducers/category';
import { allPokemons, pokemonByCategory } from './api-requests/request';

/* eslint-disable no-underscore-dangle */
const rootReducer = combineReducers({
  pokes: pokeReducer,
  filter: filterReducer,
  categoryPokemon: catReducer,
});

const store = createStore(rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
/* eslint-enable */

allPokemons(store);
pokemonByCategory(store);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);
