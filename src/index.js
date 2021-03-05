import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Board from './Board'
import './index.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
        winner: null,
    }
  }

  onCheckWinner(winner) {
    this.setState({ winner })
  }

  render() {
    const { winner } = this.state;

    return(
      <div className="container">
        <h1 className="title">Welcome to Tic-Tac-Toe</h1>
        <Board onCheckWinner={(winner) => this.onCheckWinner(winner)} />
        {winner && <h3>The winner is: {winner}</h3>}
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));