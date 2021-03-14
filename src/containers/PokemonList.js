import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import React from 'react';
import CategoryFilter from './Category';
import { changeFilter } from '../actions/actions';
// import Pokemon from '../components/Pokemon';

const PokemonList = ({
  filter, changeFilter, pokes, categorizedPokes,
}) => {
  const handleFilterChange = filter => {
    changeFilter(filter);
  };

  const pokeRender = filter === 0 || filter === 'All' ? pokes : categorizedPokes[0][filter];
  console.log(pokeRender);
  return (
    <>
      <CategoryFilter clickHandler={handleFilterChange} filter={filter} />
      {/* <div>
        {pokeRender.map(poke => (
          <Pokemon poke={poke.name} key={poke.name} />
        ))}
      </div> */}
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
