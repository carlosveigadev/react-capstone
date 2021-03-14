import PropTypes from 'prop-types';

const Pokemon = ({ name }) => (
  <>
    <h1>{name}</h1>
  </>
);

Pokemon.propTypes = {
  name: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default Pokemon;
