import PropTypes from 'prop-types';

const PokemonAsList = ({ poke }) => (
  <span>
    <h1>
      <span>{poke}</span>
    </h1>
  </span>
);

PokemonAsList.propTypes = {
  poke: PropTypes.string.isRequired,
};

export default PokemonAsList;
