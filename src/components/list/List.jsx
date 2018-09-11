import React from 'react';
import PropTypes from 'prop-types';
import styles from './list.css';

const List = ({ cities }) => (
  <ul className={styles.list}>
    {cities.map(city => (
      <li key={city.code} className={styles.item}>
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
