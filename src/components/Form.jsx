import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Form extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

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
    const { text } = this.state;
    const { onSubmit } = this.props;
    e.preventDefault();
    onSubmit(text);
    this.setState({ text: '' });
  }

  render() {
    const { text } = this.state;
    return (
      <form onSubmit={e => this.handleSubmit(e)}>
        <label htmlFor="code">
          City:
          <input
            id="code"
            type="text"
            value={text}
            onChange={e => this.handleChange(e)}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
