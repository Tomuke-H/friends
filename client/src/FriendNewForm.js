import React, { useState } from 'react';
import axios from 'axios';
import { Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const FriendNewForm = (props) => {
const [friendName, setFriendName] = useState("");
const [friendAge, setFriendAge] = useState("");
const [friendSign, setFriendSign] = useState("");
const [mentalIllness, setMentalIllness] = useState("")

    const submitHandler = async (e) => {
        e.preventDefault();
        try {
                await axios.post( "/api/friends/",
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
            <div style={{marginLeft: "20px"}}>
                <h1>New Friend Form</h1>

                 <Button>
                     <Link to='/friends'>Back to Friends</Link>
                 </Button>

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

                    <br />

                    <button style={{marginTop: "26px"}}>Submit!</button>
                </form>
            </div>
        );
};

export default FriendNewForm;