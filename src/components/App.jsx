import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../actions/creators';
import Form from './Form';
import List from './List';

class App extends Component {
  static propTypes = {
  }

  render() {
    return (
      <div>
        <Form onSubmit={code => this.props.fetchCity(code)} />
        <List cities={this.props.cities} />
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
  return bindActionCreators(Actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
