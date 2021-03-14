import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import React from 'react';
import CategoryFilter from './Category';
import { changeFilter } from '../actions/actions';
import Pokemon from '../components/Pokemon';

const PokemonList = ({
  filter, changeFilter, pokes, categorizedPokes,
}) => {
  const handleFilterChange = filter => {
    changeFilter(filter);
  };

  const renderAll = pokemon => (
    <div>
      {pokemon.map(poke => (
        <Pokemon poke={poke.name} key={poke.name} />
      ))}
    </div>
  );

  const renderCat = pokemon => (
    <div>
      {pokemon.map(poke => (
        <Pokemon poke={poke.pokemon.name} key={poke.name} />
      ))}
    </div>
  );

  console.log(categorizedPokes[0][filter]);

  const pokeRender = filter === 0 || filter === 'All' ? renderAll(pokes) : renderCat(categorizedPokes[0][filter - 1]);

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
};

const mapDispatch = {
  changeFilter,
};

export default connect(mapStateToProps, mapDispatch)(PokemonList);
