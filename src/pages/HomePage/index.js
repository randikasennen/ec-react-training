import { useEffect, useState } from 'react';
import api from '../../api/api.js';

import { useLanguage } from '../../contexts/LanguageContext.js';

export default function(props) {
    const [data, setData] = useState([]);
    const [list, setList] = useState([]);

    const [language, setLanguage] = useLanguage();

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
            <h1>Language: {language}</h1>
            <div>{list}</div>
            <button onClick={() => props.history.push('/register')}>Register new user</button>
            <button onClick={() => setLanguage('sin')}>Change to Sinhala</button>
        </div>
    )
}