import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const CategoryFilter = ({ filter, clickHandle }) => {
  const handleChange = e => {
    clickHandle(e.target.value);
  };
  return (
    <>
      <select onChange={handleChange}>
        {filter.map(cat => (
          <option value={cat} key={cat}>{cat}</option>
        ))}
      </select>
    </>
  );
};

CategoryFilter.propTypes = {
  filter: PropTypes.arrayOf(PropTypes.any).isRequired,
  clickHandle: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  filter: state,
});

export default connect(mapStateToProps)(CategoryFilter);
