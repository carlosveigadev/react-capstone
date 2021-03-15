import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import React, { useEffect } from 'react';
import CategoryFilter from './Category';
import { changeFilter, addPokemon, categoryPokemon } from '../actions/actions';
import Pokemon from '../components/Pokemon';
import { allPokemons, pokemonByCategory } from '../api-requests/request';

const PokemonList = ({
  filter, changeFilter, pokes, categorizedPokes, addPokemon, categoryPokemon,
}) => {
  const handleFilterChange = filter => {
    changeFilter(filter);
  };

  useEffect(() => {
    if (pokes.length === 0) {
      allPokemons(addPokemon);
    }
  }, []);

  useEffect(() => {
    if (categorizedPokes.length === 0) {
      pokemonByCategory(categoryPokemon);
    }
  }, []);

  const renderAll = pokemon => (
    <div>
      {pokemon.map(poke => (
        <Pokemon poke={poke.name} key={poke.name} />
      ))}
    </div>
  );

  const renderCat = (pokemon, filter) => (
    <div>
      {pokemon[filter - 1].map(name => <Pokemon poke={name.pokemon.name} key={name.name} />)}
    </div>
  );

  const pokeRender = filter[0] === 0 || filter[0] === 'All' ? renderAll(pokes) : renderCat(categorizedPokes[0], filter);

  return (
    <>
      <CategoryFilter clickHandler={handleFilterChange} filter={filter} />
      {pokeRender}
    </>
  );
};

const mapStateToProps = state => ({
  pokes: state.pokes,
  filter: state.filter,
  categorizedPokes: state.categoryPokemon,
});

PokemonList.propTypes = {
  filter: PropTypes.arrayOf(PropTypes.any).isRequired,
  pokes: PropTypes.arrayOf(PropTypes.any).isRequired,
  categorizedPokes: PropTypes.arrayOf(PropTypes.any).isRequired,
  changeFilter: PropTypes.func.isRequired,
  addPokemon: PropTypes.func.isRequired,
  categoryPokemon: PropTypes.func.isRequired,
};

const mapDispatch = {
  changeFilter,
  addPokemon,
  categoryPokemon,
};

export default connect(mapStateToProps, mapDispatch)(PokemonList);
