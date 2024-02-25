import React from 'react';
import ReactDOM from 'react-dom';

class Counter extends React.Component {
  constructor(props: { initialValue: number }) {
    super(props);
    this.state = { value: props.initialValue };
  }

  increment = () => {
    this.setState((prevState) => ({
      // @ts-ignore
      value: prevState.value + 1,
    }));
  };

  decrement = () => {
    this.setState((prevState) => ({
      // @ts-ignore
      value: prevState.value - 1,
    }));
  };

  render() {
    return React.createElement(
      'div',
      null,
      React.createElement('button', { onClick: this.decrement }, '-'),
      // @ts-ignore
      React.createElement('span', null, ` ${this.state.value} `),
      React.createElement('button', { onClick: this.increment }, '+')
    );
  }
}

function CounterApp() {
  // @ts-ignore
  return React.createElement(Counter, { initialValue: 0 }, null);
}

ReactDOM.render(React.createElement(CounterApp), document.getElementById('root'));

export default CounterApp;
