import React, { Component } from 'react';

export default class Counter extends Component {
    constructor() {
        super();
        console.log('Constructor');
    }

    componentDidMount() {
        console.log('ComponentDidMount');
    }

    render() {
        console.log('Render');

        return(
            <div>Counter</div>
        )
    }
}