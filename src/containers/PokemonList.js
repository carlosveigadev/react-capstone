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

  if (pokes.length === 0) {
    return <p>Wait man!</p>;
  }

  if (categorizedPokes.length === 0) {
    return <p>Wait man!</p>;
  }

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

  const pokeRender = filter === 0 || filter[0] === 'All' ? renderAll(pokes) : renderCat(categorizedPokes[0], filter);

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
