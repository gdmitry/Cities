import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

export class App extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);
    setTimeout(() => props.dispatch({ foo: 'bar', type: 'Now' }), 1000);
  }

  componentDidMount() {
    // API for collecting place information
    fetch('https://api.zippopotam.us/us/90210')
      .then(res => res.json())
      .then(res => console.log(res.places[0]));
  }

  render() {
    return (
      <h1>Hello, World!</h1>
    );
  }
}

export default connect()(App);
