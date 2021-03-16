import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import Navbar from '../containers/Navbar';
import About from '../components/About';
import Pokemon from '../components/Pokemon';
import Home from '../components/Home';
import filterReducer from '../reducers/filter';
import pokeReducer from '../reducers/pokemon';
import catReducer from '../reducers/category';

describe('Check if routes work ', () => {
  it('renders Navbar page correctly in the proper route.', () => {
    const navbar = renderer
      .create(
        <BrowserRouter>
          <Navbar />
        </BrowserRouter>,

      )
      .toJSON();
    expect(navbar).toMatchSnapshot();
  });

  it('renders About page correctly in the proper route.', () => {
    const about = renderer
      .create(
        <BrowserRouter>
          <About />
        </BrowserRouter>,

      )
      .toJSON();
    expect(about).toMatchSnapshot();
  });

  it('renders Pokemon page correctly in the proper route.', () => {
    const props = { state: { poke: 'test', url: 'testurl' } };
    const poke = renderer
      .create(
        <BrowserRouter>
          <Pokemon location={props} />
        </BrowserRouter>,
      )
      .toJSON();
    expect(poke).toMatchSnapshot();
  });

  it('renders Home page correctly in the proper route.', () => {
    const rootReducer = combineReducers({
      pokes: pokeReducer,
      filter: filterReducer,
      categoryPokemon: catReducer,
    });
    const store = createStore(rootReducer);
    const home = renderer
      .create(
        <Provider store={store}>
          <BrowserRouter>
            <Home />
          </BrowserRouter>
        </Provider>,
      )
      .toJSON();
    expect(home).toMatchSnapshot();
  });
});
