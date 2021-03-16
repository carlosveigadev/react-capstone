import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import Home from '../components/Home';
import filterReducer from '../reducers/filter';
import pokeReducer from '../reducers/pokemon';
import catReducer from '../reducers/category';

describe('test the inputs and verifies if the right value is displayed in the calculator', () => {
  it('displays the value of 2 in the calculator using a "+" operation', () => {
    const rootReducer = combineReducers({
      pokes: pokeReducer,
      filter: filterReducer,
      categoryPokemon: catReducer,
    });
    const store = createStore(rootReducer);
    const leftClick = { button: 0 };
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      </Provider>,
    );
    userEvent.click(screen.getByText('All'), leftClick);
    expect(screen.getByText('All'));
    userEvent.click(screen.getByText('Normal'), leftClick);
    expect(screen.getByText('Normal'));
    userEvent.click(screen.getByText('Fighting'), leftClick);
    expect(screen.getByText('Fighting'));
    userEvent.click(screen.getByText('Flying'), leftClick);
    expect(screen.getByText('Flying'));
    userEvent.click(screen.getByText('Poison'), leftClick);
    expect(screen.getByText('Poison'));
    userEvent.click(screen.getByText('Ground'), leftClick);
    expect(screen.getByText('Ground'));
    userEvent.click(screen.getByText('Rock'), leftClick);
    expect(screen.getByText('Rock'));
    userEvent.click(screen.getByText('Bug'), leftClick);
    expect(screen.getByText('Bug'));
    userEvent.click(screen.getByText('Ghost'), leftClick);
    expect(screen.getByText('Ghost'));
    userEvent.click(screen.getByText('Steel'), leftClick);
    expect(screen.getByText('Steel'));
    userEvent.click(screen.getByText('Fire'), leftClick);
    expect(screen.getByText('Fire'));
    userEvent.click(screen.getByText('Water'), leftClick);
    expect(screen.getByText('Water'));
    userEvent.click(screen.getByText('Grass'), leftClick);
    expect(screen.getByText('Grass'));
    userEvent.click(screen.getByText('Electric'), leftClick);
    expect(screen.getByText('Electric'));
    userEvent.click(screen.getByText('Psychic'), leftClick);
    expect(screen.getByText('Psychic'));
    userEvent.click(screen.getByText('Ice'), leftClick);
    expect(screen.getByText('Ice'));
    userEvent.click(screen.getByText('Dragon'), leftClick);
    expect(screen.getByText('Dragon'));
    userEvent.click(screen.getByText('Dark'), leftClick);
    expect(screen.getByText('Dark'));
    userEvent.click(screen.getByText('Fairy'), leftClick);
    expect(screen.getByText('Fairy'));
    userEvent.click(screen.getByText('Unknown'), leftClick);
    expect(screen.getByText('Unknown'));
    userEvent.click(screen.getByText('Shadow'), leftClick);
    expect(screen.getByText('Shadow'));
  });
});
