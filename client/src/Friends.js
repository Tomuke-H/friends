import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Friend from './Friend';

const Friends = () => {
    const [friends, setFriends] = useState([]);

    useEffect(() => {
        getFriends();
    }, []);

    const getFriends = async () => {
        try {
            let res = await axios.get("/api/friends");
            setFriends(res.data);
        } catch (err) {
            console.log(err);
        };
    };

    

const renderFriends = () => {
   
    return friends.map( friend => {
        return (
            <div key={friend.id}>
                <Friend friend={friend} />
            </div>
        )
    })
}


    return (
        <div>
            <h1>Friends</h1>
            {renderFriends()}
        </div>
    )
}

export default Friends;