import react, { Component } from 'react';
import Square from '../Square';
import './index.css';

export default class Board extends Component {
    constructor() {
        super();
        this.state = {
          values: ['', '', '', '', '', '', '', '', ''],
          isChanceOfX: true,
        }
    }
    
    handleOnClickSquare(index) {
        var values = this.state.values;
        values[index] = this.state.isChanceOfX ? 'X' : 'O';
    
        this.setState({
            values,
            isChanceOfX: !this.state.isChanceOfX,
        });

        const winner = this.checkWinner();
        this.props.onCheckWinner(winner);
    }
    
    checkWinner() {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];
    
        const values = this.state.values;
    
        for(let i = 0; i < lines.length; i++) {
            const [ a, b, c ] = lines[i];
    
            if(values[a] == values[b] && values[b] == values[c]) {
                return values[a];
            }
        }
    
        return null;
    }

    render() {
        const { values } = this.state;

        return(
            <div>
                <div className="row">
                    <Square value={values[0]} onClick={() => this.handleOnClickSquare(0)}/>
                    <Square value={values[1]} onClick={() => this.handleOnClickSquare(1)}/>
                    <Square value={values[2]} onClick={() => this.handleOnClickSquare(2)}/>
                </div>
                <div className="row">
                    <Square value={values[3]} onClick={() => this.handleOnClickSquare(3)}/>
                    <Square value={values[4]} onClick={() => this.handleOnClickSquare(4)}/>
                    <Square value={values[5]} onClick={() => this.handleOnClickSquare(5)}/>
                </div>
                <div className="row">
                    <Square value={values[6]} onClick={() => this.handleOnClickSquare(6)}/>
                    <Square value={values[7]} onClick={() => this.handleOnClickSquare(7)}/>
                    <Square value={values[8]} onClick={() => this.handleOnClickSquare(8)}/>
                </div>
            </div>
        )
    }
}