import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const CategoryFilter = ({ filter }) => (
  <>
    <select>
      {filter.map(cat => (
        <option value={cat} key={cat}>{cat}</option>
      ))}
    </select>
  </>
);

CategoryFilter.propTypes = {
  filter: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const mapStateToProps = state => ({
  filter: state,
});

export default connect(mapStateToProps)(CategoryFilter);
