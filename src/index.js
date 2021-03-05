import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Counter from './counter';

class App extends Component {
    constructor() {
        super();
        this.state = {
            isMount: false
        }
    }

    render() {
        return (
            <div>
                <button onClick={() => this.setState({ isMount: true })}>Mount</button>
                {this.state.isMount && <Counter />}
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));