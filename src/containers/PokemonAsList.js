import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const PokemonAsList = ({ poke, url }) => {
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <Link to={{ pathname: '/pokemon', state: { poke, url } }}>{capitalizeFirstLetter(poke)}</Link>
  );
};

PokemonAsList.propTypes = {
  poke: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default PokemonAsList;
