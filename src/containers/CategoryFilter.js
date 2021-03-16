import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import style from '../styles/CategoryFilter.module.css';

const categories = ['All', 'Normal', 'Fighting', 'Flying', 'Poison', 'Ground', 'Rock', 'Bug', 'Ghost', 'Steel', 'Fire', 'Water', 'Grass', 'Electric', 'Psychic', 'Ice', 'Dragon', 'Dark', 'Fairy'];

const CategoryFilter = ({ clickHandler }) => {
  const handleChange = e => {
    clickHandler([categories.indexOf(e.target.value)]);
  };
  return (
    <div className={style.customSelect}>
      <select onChange={handleChange}>
        {categories.map(cat => (
          <option value={cat} key={cat}>{cat}</option>
        ))}
      </select>
    </div>
  );
};

CategoryFilter.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  filter: state,
});

export default connect(mapStateToProps)(CategoryFilter);
