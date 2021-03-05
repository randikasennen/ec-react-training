import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
    constructor() {
        super();
        this.state = {
            count: 0
        }
    }

    render() {
        return(
            <div>
                <div>Count: {this.state.count}</div>
                <button onClick={() => this.setState({ count: this.state.count + 1 })}>Count</button>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));