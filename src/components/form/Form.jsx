import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './form.css';

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
      <form onSubmit={e => this.handleSubmit(e)} className={styles.form}>
        <label htmlFor="code" className={styles.label}>
          <span className={styles.text}>City code:</span>
          <input
            className={styles.field}
            id="code"
            type="text"
            value={text}
            onChange={e => this.handleChange(e)}
          />
        </label>
        <input className={styles.button} type="submit" value="Submit" />
      </form>
    );
  }
}
