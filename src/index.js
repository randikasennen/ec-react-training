import { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function App() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        fetch('https://reqres.in/api/users?page=2')
            .then(response => response.json())
            .then(responseJSON => {
                const data = responseJSON.data;

                var tableData = [];

                data.forEach((dataObj, index) => {
                    const { id, email, first_name, last_name } = dataObj;

                    tableData.push(
                        <tr key={index}>
                            <td>{id}</td>
                            <td>{email}</td>
                            <td>{first_name}</td>
                            <td>{last_name}</td>
                        </tr>
                    )
                })

                setData(tableData);
            })
            .catch(error => console.log(error))
    }

    return(
        <table>
            <tr>
                <th>ID</th>
                <th>Email</th>
                <th>First Name</th>
                <th>Last Name</th>
            </tr>
            <tbody>{data}</tbody>
        </table>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));