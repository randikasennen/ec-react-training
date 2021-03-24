import React, { useEffect, useState } from 'react';
import api from '../../api/api.js';

export default function(props) {
    const [data, setData] = useState([]);
    const [list, setList] = useState([]);

    useEffect(() => { fetchData() }, []);
    useEffect(() => { buildList() }, [data]);

    const fetchData = () => {
        api.get('/users')
        .then(response => setData(response.data))
        .catch(error => console.log(error))
    }

    const buildList = () => {
        var list = [];

        data.forEach(user => {
            const { id, email, first_name, last_name, avatar } = user;
            let name = first_name + ' ' + last_name;
            list.push(<button onClick={() => props.history.push(('/users/' + id), { user })}>{name}</button>)
        })

        setList(list);
    }

    return (
        <div>
            {/* <div>{list}</div> */}
            <button onClick={() => props.history.push('/signin')}>Signin</button>
            <button onClick={() => props.history.push('/register')}>Register new user</button>
        </div>
    )
}