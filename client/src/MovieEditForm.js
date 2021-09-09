import React, { useEffect, useState } from "react";
import axios from "axios";

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
            // alert("err")
        }
    };

    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`/api/friends/${props.match.params.friend_id}/movies/${props.match.params.id}`,
            {
                id: props.match.params.id,
                title: setMovieTitle,
                genre: movieGenre
            });
            props.history.push(`/friends/${props.match.params.friend_id}/movies`);
        } catch(err){
            alert("err")
        }
    };
    
    
    
    
    return (
        <div>
            <h1>MovieEditForm</h1>
            <form onSubmit={submitHandler}>
            <p>Movie:</p>
            <input value={movieTitle} onChange={(e) => {setMovieTitle(e.target.value)}}/>
            <p>Genre:</p>
            <input value={movieGenre} onChange={(e) => {setMovieGenre(e.target.value)}}/>
            <br />
            <button>Submit!</button>
            </form>
        </div>
    )
};

export default MovieEditForm;