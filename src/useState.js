import { useState } from 'react';
import ReactDOM from 'react-dom';

function App() {
    const [name, setName] = useState("John Doe");
    const [count, setCount] = useState(0);
    const [showCounter, setShowCounter] = useState(false);

    return(
        <div>
            <div>Welcome {name}</div>
            <button onClick={() => setName('anonymous')}>Change name to anonymous</button>

            <button onClick={() => setShowCounter(!showCounter)}>{showCounter ? 'Hide' : 'Show'} counter</button>

            {showCounter && <div>
                <div>Count: {count}</div>
                <button onClick={() => setCount(count + 1)}>Count</button>
            </div>}
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));