import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    counter: 0,
    errorMessage: null,
  };

  decrementHandler = () => {
    this.state.counter === 0
      ? this.setState({ errorMessage: 'Cannot go lower :(' })
      : this.setState({ counter: this.state.counter - 1 });
  };
  render() {
    return (
      <div data-test='component-app'>
        <h1 data-test='counter-display'>
          The counter is currently {this.state.counter}
        </h1>
        {this.state.errorMessage ? (
          <h1 data-test='error-message'>{this.state.errorMessage}</h1>
        ) : null}
        <button
          data-test='increment-button'
          onClick={() =>
            this.setState({
              counter: this.state.counter + 1,
              errorMessage: null,
            })
          }>
          Increment counter
        </button>
        <button onClick={this.decrementHandler} data-test='decrement-button'>
          Decrement Button
        </button>
      </div>
    );
  }
}

export default App;
