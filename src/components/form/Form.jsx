import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './form.css';

export default class Form extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string,
  };

  static defaultProps = {
    value: '',
  };

  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };
  }

  componentWillReceiveProps(nextProps) {
    const { text } = this.state;
    if (nextProps.value !== text) {
      this.setState({ text: nextProps.value });
    }
  }

  handleChange(e) {
    const { onChange } = this.props;
    const text = e.target.value;
    this.setState({ text });
    onChange(text);
  }

  handleSubmit(e) {
    const { text } = this.state;
    const { onSubmit } = this.props;
    e.preventDefault();
    this.setState({ text: '' });
    onSubmit(text);
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
