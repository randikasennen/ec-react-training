import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Counter from './counter';

class App extends Component {
    constructor() {
        super();
        this.state = {
            isMount: false,
            count: 0
        }
    }

    render() {
        return (
            <div>
                <button onClick={() => this.setState({ isMount: true })}>Mount</button>
                <button onClick={() => this.setState({ count: this.state.count + 1 })}>Update</button>
                <button onClick={() => this.setState({ isMount: false })}>Unmount</button>
                {this.state.isMount && <Counter count={this.state.count} />}
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));