import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

const Pokemon = ({ poke, url }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      const newData = await response.json();
      setData(newData);
    };
    fetchData();
  }, []);

  return (
    <span>
      <h1>
        <span>{poke}</span>
        <span>{data}</span>
      </h1>
    </span>
  );
};

Pokemon.propTypes = {
  poke: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default Pokemon;
