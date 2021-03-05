import { useState } from 'react';
import ReactDOM from 'react-dom';

function App() {
    const [count, setCount] = useState(0);

    return(
        <div>
            <div>Count: {count}</div>
            <button onClick={() => setCount(count + 1)}>Count</button>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));