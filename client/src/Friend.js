import React from 'react'
import { Link } from 'react-router-dom'

const Friend = ({friend, deleteFriend}) => {
    return (
        <div>
            <h1>{friend.name}</h1>
            <p>{friend.age}</p>
            <p>{friend.sign}</p>
            <p>{friend.mental_illness}</p>
            <button onClick={() => deleteFriend(friend.id)}>Delete</button>
            <Link to={`/friends/${friend.id}/edit`}>Edit</Link>
        </div>
    )
}

export default Friend;