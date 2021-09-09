import React, { useState } from 'react';
import axios from 'axios';

const FriendEditForm = (props) => {
const [friendName, setFriendName] = useState(props.friend.name);
const [friendAge, setFriendAge] = useState(props.friend.age);
const [friendSign, setFriendSign] = useState(props.friend.sign);
const [mentalIllness, setMentalIllness] = useState(props.friend.mental_illness)

//put useEffect to get friend

    const submitHandler = async (e) => {
        e.preventDefault();
        try {
                await axios.put( "/api/friends/",
                {name: friendName,
                age: friendAge,
                sign: friendSign,
                mental_illness: mentalIllness
                });

                props.history.push("/friends");
        } catch (err) {
            console.log(err.response)
        }
};


        return (
            <div>
                <p>New Friend Form</p>
                <form onSubmit={submitHandler} >
                    <p>Name:</p>
                    <input value={friendName}
                    onChange={(e) => {setFriendName(e.target.value)}}/>

                    <p>Age:</p>
                    <input value={friendAge}
                    onChange={(e) => {setFriendAge(e.target.value)}}/>

                    <p>Sign:</p>
                    <input value={friendSign}
                    onChange={(e) => {setFriendSign(e.target.value)}}/>

                    <p>Mental Illness:</p>
                    <input value={mentalIllness}
                    onChange={(e) => {setMentalIllness(e.target.value)}}/>

                    <button>Submit!</button>
                </form>
            </div>
        );
};

export default FriendEditForm;