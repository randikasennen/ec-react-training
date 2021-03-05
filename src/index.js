import { useState } from 'react';
import ReactDOM from 'react-dom';
import Counter from './Counter';

function App() {
    const [showCounter, setShowCounter] = useState(false);
    const [count, setCount] = useState(0);

    return(
        <div>
            <button onClick={() => setShowCounter(true)}>Mount</button>
            <button onClick={() => setCount(count + 1)}>Update</button>
            <button onClick={() => setShowCounter(false)}>Unmount</button>

            {showCounter && <Counter count={count} />}
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));