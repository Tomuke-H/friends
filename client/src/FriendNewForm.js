import React from 'react'

const FriendNewForm = () => {

const submitHandler = () =>{

}
    return (
        <div>
            <p>New Friend Form</p>
            <form onSubmit={submitHandler} >
                <p>Name:</p>
                <input name="user[]"/>
                <p>Age:</p>
                <input age=""/>
                <p>Sign:</p>
                <input sign="user[]"/>
                <p>Name:</p>
                <input mental_illness="user[]"/>
                <button>Submit!</button>
            </form>
        </div>
    );
};

export default FriendNewForm;