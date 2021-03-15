import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const PokemonAsList = ({ poke, url }) => {
  console.log(poke, url);
  return (
    <span>
      <h1>
        <Link to={{ pathname: '/pokemon', state: { poke, url } }}>{poke}</Link>
      </h1>
    </span>
  );
};

PokemonAsList.propTypes = {
  poke: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default PokemonAsList;
