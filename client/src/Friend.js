import React from 'react'
import { Link } from 'react-router-dom'

const Friend = ({friend}) => {
    return (
        <div>
            <Link to={`friends/${friend.id}/edit`}>Edit</Link>
            <h1>{friend.name}</h1>
            <p>{friend.age}</p>
            <p>{friend.sign}</p>
            <p>{friend.mental_illness}</p>
        </div>
    )
}

export default Friend;