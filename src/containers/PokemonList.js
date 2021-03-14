import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import React from 'react';
// import { allPokemons, pokemonByCategory } from '../api-requests/request';
import CategoryFilter from './Category';
import { changeFilter } from '../actions/actions';
// import Pokemon from '../components/Pokemon';

const PokemonList = ({ filter, changeFilter }) => {
  const handleFilterChange = filter => {
    changeFilter(filter);
  };

  // const pokeRender = filter === 0 || f
  // ilter === 'All' ? allPokemons() : pokemonByCategory(filter);
  // setPokemonData(pokeRender);

  // useEffect((filter)=>{
  //   const pokeRender = filter === 0 ||
  // filter === 'All' ? allPokemons() : pokemonByCategory(filter);
  //   return setPokemonData(pokeRender)
  //  }, []);

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
  filter: state,
});

PokemonList.propTypes = {
  filter: PropTypes.arrayOf(PropTypes.string).isRequired,
  changeFilter: PropTypes.func.isRequired,
};

const mapDispatch = {
  changeFilter,
};

export default connect(mapStateToProps, mapDispatch)(PokemonList);
