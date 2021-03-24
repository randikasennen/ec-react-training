import React, { useEffect, useState } from 'react';
import api from '../../api/api.js';
import { jsPDF } from "jspdf";
import 'jspdf-autotable'

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

    const generateReport = () => {
        const doc = new jsPDF();

        doc.text("Hello world!", 10, 10);

        doc.autoTable({
            head: [['Name', 'Email', 'Country']],
            body: [
              ['David', 'david@example.com', 'Sweden'],
              ['Castille', 'castille@example.com', 'Spain'],
            ],
        })

        doc.save("a4.pdf");
    }

    return (
        <div>
            <div>{list}</div>
            <button onClick={() => generateReport()}>Save</button>
        </div>
    )
}