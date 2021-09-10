import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Card } from 'semantic-ui-react';
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
                <Friend friend={friend} deleteFriend={deleteFriend} />
            </div>
        )
    })
}

const deleteFriend = async (id) => {
    try {
        await axios.delete(`/api/friends/${id}`);
        setFriends(friends.filter((f) => f.id !==id));
    }   catch (err) {
        console.log(err);
    }
};


    return (
        <div style={{marginLeft: "20px"}}>
            <h1>Friends</h1>
            <Card.Group>
                {renderFriends()}
            </Card.Group>
        </div>
    )
}

export default Friends;