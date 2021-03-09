import { useState } from 'react';
import ReactDOM from 'react-dom';

function App() {
    const [name, setName] = useState('');
    const [job, setJob] = useState('');

    const handleOnSubmit = (e) => {
        e.preventDefault();

        const data = { name, job };

        fetch('https://reqres.in/api/users', {
            method: 'POST',
            body: data
        })
        .then(response => { // Success callback
            response.json().then(responseJSON => console.log(responseJSON));
        })
        .catch(error => console.log(error))    // Exception callback
    }

    return(
        <form onSubmit={(e) => handleOnSubmit(e)}>
            <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
            <input type="text" placeholder="Job" value={job} onChange={(e) => setJob(e.target.value)} />
            <input type="submit" />
        </form>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));



/*


Front-end <-- fetch-api --> Back-end


*/