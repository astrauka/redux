import React, { Component, PropTypes } from 'react';

export default class Some extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = { text: props.text };
  }

  onSomeChange(e) {
    this.setState({ text: e.target.value });
  }

  randomColor() {
    const colors = Array('red', 'blue', 'green');
    return colors[Math.floor(Math.random() * colors.length)];
  }

  render() {
    const { text } = this.state;

    return (
      <div>
        <input name='some' type='text' value={text} onChange={::this.onSomeChange} />
        {text.split(' ').map((word, index) =>
          <p style={ {color: ::this.randomColor()} } key={index}>{word} :+1:</p>
        )}
      </div>
    );
  }
}
