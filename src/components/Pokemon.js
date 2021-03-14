import PropTypes from 'prop-types';

const Pokemon = ({ poke }) => (
  <span>
    <h1>
      <span>{poke}</span>
    </h1>
  </span>
);

Pokemon.propTypes = {
  poke: PropTypes.string.isRequired,
};

export default Pokemon;
