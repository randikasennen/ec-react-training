import react, { Component } from 'react';
import ReactDOM from 'react-dom';

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    }
  }

  

  doCount() {
    const { onCount } = this.props;

    this.setState({
      count: this.state.count + 1
    })

    onCount(1);
  }

  render() {
    const { name } = this.props;

    return (
      <div>
        <h3>{this.state.count}</h3>
        <button onClick={() => this.doCount()}>{name}</button>
      </div>
    )
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      total: 0,
      foo: 'abc'
    }
  }

  countTotal(increment) {
    const { total } = this.state;

    this.setState({
      total: total + increment
    })
  }

  render() {
    return (
      <div>
        <Counter name="Counter 1" onCount={(increment) => this.countTotal(increment)} />
        <Counter name="Counter 2" onCount={(increment) => this.countTotal(increment)} />
        <Counter name="Counter 3" onCount={(increment) => this.countTotal(increment)} />

        <h3>Total count = {this.state.total}</h3>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))