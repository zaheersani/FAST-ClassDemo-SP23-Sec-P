import React, { useEffect, useState } from 'react';

export default function UsersList() {

    const [getUsers, setUsers] = React.useState([])
    const [getState, setState] =  useState('init state')
    
    console.log('Start of Component')

    useEffect(() => {
        console.log('Inside useEffect')

        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => {
                console.log(json)
                setUsers(JSON.stringify(json))
            })
    }, [getUsers])

    console.log('After useEffect')

    return (
        <div>
            <h3>List of Users</h3>
            {getState}
            <button onClick={() => setState(`updated state ${new Date().getMilliseconds()}`)}>Change State</button>
            <ul>
                {/* {getUsers.map( (u,i) => <li key={i}>{u.name}</li>)} */}
            </ul>
        </div>
    )
}