import './index.css';

export default function(props) {
    const { user } = props.location.state
    const { id, email, first_name, last_name, avatar } = user;

    return (
        <div className="card">
            <img className="cover-image" src="https://www.incimages.com/uploaded_files/image/1920x1080/getty_509107562_2000133320009280346_351827.jpg" />
            
            <div className="user-info-container">
                <img className="avatar" src={avatar} />

                <div className="user-info">
                    <div className="name">{first_name + ' ' + last_name}</div>
                    <div className="email">{email}</div>
                </div>
            </div>

            <div className="description">Use the sample job postings below to help write your job description and improve your job posting results.</div>
        </div>
    )
}