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
    updateCity: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      selectedCity: '',
      cityToUpdate: '',
    };
  }

  onSubmit(code) {
    const { fetchCity, updateCity } = this.props;
    const { selectedCity, cityToUpdate } = this.state;
    if (selectedCity && cityToUpdate && (selectedCity !== cityToUpdate)) {
      updateCity(selectedCity, cityToUpdate);
    } else {
      fetchCity(code);
    }
    this.setState({
      selectedCity: '',
      cityToUpdate: '',
    });
  }

  render() {
    const {
      cities, loading, error,
    } = this.props;
    const { selectedCity, cityToUpdate } = this.state;

    return (
      <div className={styles.container}>
        <Form
          onChange={code => this.setState({ cityToUpdate: code })}
          onSubmit={code => this.onSubmit(code)}
          value={selectedCity || cityToUpdate}
        />
        {!loading && <List cities={cities} onSelect={cityCode => this.setState({ selectedCity: cityCode })} />}
        {loading && <Spinner />}
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
    updateCity: (codeToUpdate, codeToFetch) => dispatch(Actions.updateCity(codeToUpdate, codeToFetch)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
