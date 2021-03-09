import './index.css';

export default function Card(props) {
    const { id, email, first_name, last_name, avatar } = props.data;

    return(
        <div className="card">
            <img className="avatar" src={avatar} alt=""/>
            
            <div className="info">
                <div className="name">{first_name} {last_name}</div>
                <div className="email">{email}</div>
                <div className="id">User ID: {id}</div>
            </div>
        </div>
    )
}