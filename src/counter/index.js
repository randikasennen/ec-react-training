import React, { Component } from 'react';

export default class Counter extends Component {
    constructor() {
        super();
        this.state = {
            stateValue: 0
        }
        console.log('Constructor');
    }

    componentDidMount() {
        console.log('ComponentDidMount');
    }

    componentDidUpdate(prevProps, prevState) {
        if(this.props.count !== prevProps.count)
            console.log('Props updated: From ' + prevProps.count + ' to ' + this.props.count);
        
        if(this.state.stateValue !== prevState.stateValue)
            console.log('State updated: From ' + prevState.stateValue + ' to ' + this.state.stateValue);
    }

    render() {
        console.log('Render');

        return(
            <div>
                <div>Counter: {this.props.count}</div>
                <div>State value: {this.state.stateValue}</div>
                <button onClick={() => this.setState({ stateValue: this.state.stateValue + 1 })}>Change State</button>
            </div>
        )
    }
}