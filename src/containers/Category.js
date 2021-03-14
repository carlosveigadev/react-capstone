import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const categories = ['All', 'Normal', 'Fighting', 'Flying', 'Poison', 'Ground', 'Rock', 'Bug', 'Ghost', 'Steel', 'Fire', 'Water', 'Grass', 'Electric', 'Psychic', 'Ice', 'Dragon', 'Dark', 'Fairy', 'Unknown', 'Shadow'];

const CategoryFilter = ({ clickHandler }) => {
  const handleChange = e => {
    clickHandler(categories.indexOf(e.target.value));
  };
  return (
    <>
      <select onChange={handleChange}>
        {categories.map(cat => (
          <option value={cat} key={cat}>{cat}</option>
        ))}
      </select>
    </>
  );
};

CategoryFilter.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  filter: state,
});

export default connect(mapStateToProps)(CategoryFilter);
