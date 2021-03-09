import { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
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

                var cardsData = [];

                data.forEach((dataObj, index) => {
                    cardsData.push(
                        <Card data={dataObj} key={index} />
                    )
                })

                setData(cardsData);
            })
            .catch(error => console.log(error))
    }

    return(
        <div>
            <h1 className="title">Users List</h1>
            <div className="cards-container">{data}</div>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));