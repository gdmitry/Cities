import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Actions from '../actions/creators';
import Form from './Form';
import List from './List';
import Spinner from './Spinner';
import styles from './app.css';

const App = (props) => {
  const {
    cities, fetchCity, loading, error,
  } = props;

  if (loading) {
    return <div className={styles.container}><Spinner /></div>;
  }

  return (
    <div className={styles.container}>
      <Form onSubmit={code => fetchCity(code)} />
      <List cities={cities} />
      {error && <div>{error}</div>}
    </div>
  );
};

App.propTypes = {
  cities: PropTypes.arrayOf(PropTypes.shape({
    code: PropTypes.string,
    name: PropTypes.string,
    state: PropTypes.string,
  })).isRequired,
  fetchCity: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
};

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
