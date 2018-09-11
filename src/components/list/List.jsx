import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './list.css';

export default class List extends Component {
static propTypes = {
  cities: PropTypes.arrayOf(PropTypes.shape({
    code: PropTypes.string,
    name: PropTypes.string,
    state: PropTypes.string,
  })).isRequired,
  onSelect: PropTypes.func.isRequired,
};

constructor(props) {
  super(props);
  this.state = {
    selectedOption: '',
  };
}

handleOptionChange(e) {
  const selectedOption = e.target.value;
  const { onSelect } = this.props;
  this.setState({
    selectedOption,
  });
  onSelect(selectedOption);
}

render() {
  const { cities } = this.props;
  const { selectedOption } = this.state;
  return (
    <ul className={styles.list}>
      {cities.map(city => (
        <li key={city.code} className={styles.item}>
          <input
            type="radio"
            name="city"
            value={city.code}
            checked={selectedOption === city.code}
            onChange={e => this.handleOptionChange(e)}
          />
          <span>
            {city.name}
,
            {city.state}
          </span>
        </li>
      ))}
    </ul>
  );
}
}
