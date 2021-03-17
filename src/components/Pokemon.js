import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { GiBodyHeight, GiWeight } from 'react-icons/gi';
import { HiOutlineIdentification } from 'react-icons/hi';
import Navbar from '../containers/Navbar';
import style from '../styles/Pokemon.module.css';
import { fetchPokeData } from '../api-requests/request';

const Pokemon = ({ location }) => {
  const [data, setData] = useState(null);

  let name;
  let pokeUrl;

  if (location.state === undefined) {
    const { pokeName } = useParams();
    name = pokeName;
    pokeUrl = `https://pokeapi.co/api/v2/pokemon/${pokeName}/`;
  } else {
    name = location.state.poke;
    pokeUrl = location.state.url;
  }

  useEffect(async () => {
    const newData = await fetchPokeData(pokeUrl);
    setData(newData);
  }, []);

  if (data) {
    return (
      <span>
        <Navbar />
        <div className={style.flex}>
          <div className={style.mainDiv}>

            <h1>{name}</h1>
            <img src={data.sprites.front_default} alt={name} />

            <div className={style.flex}>
              <GiBodyHeight className={style.icon} />
              <div className={style.data}>
                {`${data.height * 10}cm`}
              </div>
            </div>

            <div className={style.flex}>
              <GiWeight className={style.icon} />
              <div className={style.data}>
                {`${data.weight / 10}kg`}
              </div>
            </div>

            <div className={style.flex}>
              <HiOutlineIdentification className={style.icon} />
              <div className={style.data}>
                {`${data.id}`}
              </div>
            </div>

          </div>
        </div>
      </span>
    );
  }
  return (
    <p className={style.flex}>Fetching Data...</p>
  );
};

Pokemon.propTypes = {
  location: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Pokemon;
