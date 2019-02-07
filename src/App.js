import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { count: 0 };

    this.setCount = this.setCount.bind(this);
  }

  setCount() {
    this.setState(prevState => ({
      count: prevState.count + 1
    }));
  }

  render() {
    const { count } = this.state;
    return (
      <div className="App">
        <h1>Hooks Demo</h1>
        <p>Count: {count}</p>
        <button type="button" onClick={this.setCount}>Increment Count</button>
      </div>
    );
  }
}

export default App;
