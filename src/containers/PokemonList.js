import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CategoryFilter from './Category';
import { changeFilter } from '../actions/actions';
import Pokemon from '../components/Pokemon';

const PokemonList = ({ filter, changeFilter, pokes }) => {
  const handleFilterChange = filter => {
    changeFilter(filter);
  };

  const pokeRender = filter.length > 1 ? pokes : pokes.filter(poke => poke.category === filter[0]);

  return (
    <>
      <CategoryFilter clickHandle={handleFilterChange} filter={filter} />
      <div>
        {pokeRender.map(poke => (
          <Pokemon poke={poke} key={poke.id} />
        ))}
      </div>
    </>
  );
};

const mapStateToProps = state => ({
  pokes: state.books,
});

PokemonList.propTypes = {
  filter: PropTypes.arrayOf(PropTypes.string).isRequired,
  pokes: PropTypes.arrayOf(PropTypes.object).isRequired,
  changeFilter: PropTypes.func.isRequired,
};

const mapDispatch = {
  changeFilter,
};

export default connect(mapStateToProps, mapDispatch)(PokemonList);
