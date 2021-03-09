import { useState } from 'react';
import ReactDOM from 'react-dom';

function App() {
    const [name, setName] = useState('');
    const [job, setJob] = useState('');

    const handleOnSubmit = async (e) => {
        e.preventDefault();

        const data = { name, job };

        await fetch('https://reqres.in/api/users', {
            method: 'POST',
            body: data
        })
        .then(async (response) => { // Success callback
            await response.json().then(responseJSON => console.log(responseJSON));
        })
        .catch(error => console.log(error))    // Exception callback

        console.log('HI')
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