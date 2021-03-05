import react, { Component } from 'react';
import './index.css';

export default class Square extends Component {
    render() {
      const { value, onClick } = this.props;
  
      return(
        <button className="square" onClick={onClick}>{value}</button>
      )
    }
}