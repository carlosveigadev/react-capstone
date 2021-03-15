import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import Navbar from '../containers/Navbar';

const Pokemon = ({ location }) => {
  const [data, setData] = useState(null);

  const name = location.state.poke;

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(location.state.url);
      const newData = await response.json();
      setData(newData);
    };
    fetchData();
  }, []);

  if (data) {
    return (
      <span>
        <Navbar />
        <h1>
          <span>{name}</span>
          <img src={data.sprites.front_default} alt={name} />
        </h1>
      </span>
    );
  }
  return (
    <p>Fetching Data...</p>
  );
};

Pokemon.propTypes = {
  location: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Pokemon;
