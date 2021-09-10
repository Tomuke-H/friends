import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FriendEditForm = (props) => {
    const [friendName, setFriendName] = useState('');
    const [friendAge, setFriendAge] = useState('');
    const [friendSign, setFriendSign] = useState('');
    const [mentalIllness, setMentalIllness] = useState('')

//put useEffect to get friend
    useEffect(() => {
        getFriend();
    }, []);

    const getFriend = async () => {
        try {
            let res = await axios.get(`/api/friends/${props.match.params.id}`)
            setFriendName(res.data.name)
            setFriendAge(res.data.age)
            setFriendSign(res.data.sign)
            setMentalIllness(res.data.mental_illness)
            console.log(props.match.params.id)
        }catch (err) {

        }
    }

    const submitHandler = async (e) => {
        e.preventDefault();
        try {
                await axios.put( `/api/friends/${props.match.params.id}`,
                    {
                    id: props.match.params.id,
                    name: friendName,
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
            <div style={{marginLeft: "20px"}}>
                <h1>Edit Friend</h1>
                <form onSubmit={submitHandler} >
                    <p style={{marginTop: "20px"}}>Name:</p>
                    <input value={friendName}
                    onChange={(e) => {setFriendName(e.target.value)}}/>

                    <p style={{marginTop: "20px"}}>Age:</p>
                    <input value={friendAge}
                    onChange={(e) => {setFriendAge(e.target.value)}}/>

                    <p style={{marginTop: "20px"}}>Sign:</p>
                    <input value={friendSign}
                    onChange={(e) => {setFriendSign(e.target.value)}}/>

                    <p style={{marginTop: "20px"}}>Mental Illness:</p>
                    <input value={mentalIllness}
                    onChange={(e) => {setMentalIllness(e.target.value)}}/>

                    <br/>

                    <button style={{margin: "26px"}}>Submit!</button>
                </form>
            </div>
        );
};



export default FriendEditForm;