import { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './table.css';

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
                    const { id, email, first_name, last_name, avatar } = dataObj;

                    tableData.push(
                        <tr key={index}>
                            <td>{id}</td>
                            <td>{email}</td>
                            <td>{first_name}</td>
                            <td>{last_name}</td>
                            <td><img src={avatar} /></td>
                        </tr>
                    )
                })

                setData(tableData);
            })
            .catch(error => console.log(error))
    }

    return(
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Email</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Avatar</th>
                </tr>
            </thead>
            <tbody>{data}</tbody>
        </table>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));