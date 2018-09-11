import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Actions from '../actions/creators';
import Form from './form/Form';
import List from './list/List';
import Spinner from './spinner/Spinner';
import styles from './app.css';

class App extends Component {
static propTypes = {
  cities: PropTypes.arrayOf(PropTypes.shape({
    code: PropTypes.string,
    name: PropTypes.string,
    state: PropTypes.string,
  })).isRequired,
  fetchCity: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
};

constructor(props) {
  super(props);
  this.state = {
    selectedCity: '',
  };
}

render() {
  const {
    cities, fetchCity, loading, error,
  } = this.props;

  const { selectedCity } = this.state;
  if (loading) {
    return <div className={styles.container}><Spinner /></div>;
  }

  return (
    <div className={styles.container}>
      <Form onSubmit={code => fetchCity(code)} value={selectedCity} />
      <List cities={cities} onSelect={cityCode => this.setState({ selectedCity: cityCode })} />
      {error && <div className={styles.error}>{error}</div>}
    </div>
  );
}
}

function mapStateToProps(state) {
  return {
    loading: state.dataReducer.loading,
    cities: state.dataReducer.cities,
    error: state.dataReducer.error,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchCity: code => dispatch(Actions.fetchCity(code)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
