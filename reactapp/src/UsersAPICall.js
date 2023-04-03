import React from 'react';

export default function UsersList() {

    const [getUsers, setUsers] = React.useState([])

    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(json => {
            console.log(json)
            setUsers(json)
        })

    return (
        <div>
            <h3>List of Users</h3>
            <ul>
                {getUsers.map(u => <li>{u.name}</li>)}
            </ul>
        </div>
    )
}