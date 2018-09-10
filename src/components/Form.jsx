import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Form extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onSubmit(this.state.text);
    this.setState({ text: '' });
  }

  render() {
    return (
      <form onSubmit={e => this.handleSubmit(e)}>
        <label>
          City:
          <input
            type="text"
            value={this.state.text}
            onChange={e => this.handleChange(e)}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
