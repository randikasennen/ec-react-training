import { useState } from 'react';
import ReactDOM from 'react-dom';

function App() {
    const [count, setCount] = useState(0);
    // const [myValue, setMyValue] = useState('string');

    // const returnValue = useState(0); // const returnValue = [state, setState];
    // const count = returnValue[0];
    // const setCount = returnValue[1];

    return(
        <div>
            <div>Count: {count}</div>
            <button onClick={() => setCount(count + 1)}>Count</button>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));

/*

function useState(initialValue) {
    (1) Initiallize a state value with the initial value.
    const state = initialValue

    (2) Get a ref to function for updating the created state.

    const setState = function(newValue) {
        state = newValue
    }

    return [state, setState];
}

*/