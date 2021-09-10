import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';   

const MovieEditForm = (props) => {
    const [movieTitle, setMovieTitle] = useState("");
    const [movieGenre, setMovieGenre] = useState("");

    useEffect(() => {
        getMovie();
    }, []);

    const getMovie = async () => {
        try{
            let res = await axios.get(`/api/friends/${props.match.params.friend_id}/movies/${props.match.params.id}`)
            setMovieTitle(res.data.title)
            setMovieGenre(res.data.genre)
            console.log(res.data)
        } catch(err) {
            console.log(err)
        }
    };

    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`/api/friends/${props.match.params.friend_id}/movies/${props.match.params.id}`,
            {
                title: movieTitle,
                genre: movieGenre
            });
            props.history.push(`/friends/${props.match.params.friend_id}/movies`);
        } catch(err){
            alert("err")
        }
    };
    
    
    
    
    return (
        <div style={{marginLeft: "20px"}}>
            <h1>MovieEditForm</h1>

            <Button>
                <Link to={`/friends/${props.match.params.friend_id}/movies/`}>Back to Movies</Link>
            </Button>

            <form onSubmit={submitHandler}>

            <p style={{marginTop: "20px"}}>Movie:</p>
            <input value={movieTitle} onChange={(e) => {setMovieTitle(e.target.value)}}/>

            <p style={{marginTop: "20px"}}>Genre:</p>
            <input value={movieGenre} onChange={(e) => {setMovieGenre(e.target.value)}}/>

            <br />

            <button style={{marginTop: "26px"}}>Submit!</button>
            </form>
        </div>
    )
};

export default MovieEditForm;