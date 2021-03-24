import React, { useEffect, useState } from 'react';
import api from '../../api/api.js';
import { useTranslation } from 'react-i18next';

export default function(props) {
    const [data, setData] = useState([]);
    const [list, setList] = useState([]);

    const { t, i18n } = useTranslation();

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
            <h1>{t("Welcome")}</h1>
            <h2>{t("Greetings")}</h2>
            <h3>{t("Quote")}</h3>
            <div>{list}</div>
            <button onClick={() => props.history.push('/register')}>Register new user</button>
            <button onClick={() => i18n.changeLanguage('en')}>English</button>
            <button onClick={() => i18n.changeLanguage('sin')}>Sinhala</button>
        </div>
    )
}