import axios from 'axios';
import React, { useState } from 'react'

const MovieNewForm = (props) => {
const [movieTitle, setMovieTitle] = useState("");
const [movieGenre, setMovieGenre] = useState("");

    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            await axios.post( `/api/friends/${props.match.params.id}/movies/`),
            {id: props.match.params.id,
            title: movieTitle,
            genre: movieTitle
        }
            props.history.push(`/friends/${props.match.params.id}/movies/`);
        } catch (err) {
            console.log(err.respose)
        }
    };

    return (
        <div>
            <h1>Movie New Form</h1>
            <form onSubmit={submitHandler}>
            <p>Title:</p>
            <input value={movieTitle}
            onChange={(e) => {setMovieTitle(e.target.value)}}/>

            <p>Genre:</p>
            <input value={movieGenre}
            onChange={(e) => {setMovieGenre(e.target.value)}}/>

            <button>Submit!</button>
            
            </form>
        </div>
    );
};

export default MovieNewForm;