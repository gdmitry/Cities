import React from 'react';
import PropTypes from 'prop-types';

const List = ({ cities }) => (
  <ul>
    {cities.map(city => (
      <li key={city.code}>
        {city.name}
,
        {city.state}
      </li>
    ))}
  </ul>
);

List.propTypes = {
  cities: PropTypes.arrayOf(PropTypes.shape({
    code: PropTypes.string,
    name: PropTypes.string,
    state: PropTypes.string,
  })).isRequired,
};

export default List;
