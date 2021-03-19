export default function(props) {
    const { user } = props.location.state
    const { id, email, first_name, last_name, avatar } = user;

    console.log(props)

    return (
        <div>
            <div>{id}</div>
            <div>{email}</div>
            <div>{first_name}</div>
            <div>{last_name}</div>
        </div>
    )
}