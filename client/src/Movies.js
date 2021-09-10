import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Movie from './Movie';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';

const Movies = (props) => {
    const [movies, setMovies] = useState([])
    const [friend, setFriend] = useState({})

    useEffect(() => {
        getMovies();
        getFriend();
    }, []);

    const getFriend = async () => {
        try {
            let res = await axios.get(`/api/friends/${props.match.params.id}`)
            setFriend(res.data)
        }catch (err) {
            console.log(err)
        }
    }

    const getMovies = async () => {
        try {
            let res = await axios.get(`/api/friends/${props.match.params.id}/movies`);
            setMovies(res.data);
        } catch (err) {
            console.log(err);
        };
    };

    const renderMovies = () => {
        return movies.map((m) => {
            return (
                <div key={m.id}>
                    <Movie deleteMovie={deleteMovie} movie={m}/>
                </div>
            )
        })
    }

    const deleteMovie = async (id) => {
        try {
            await axios.delete(`/api/friends/${props.match.params.id}/movies/${id}`);
            setMovies(movies.filter((f) => f.id !==id));
        }   catch (err) {
            console.log(err);
        }
    };

    return (
        <div style={{marginLeft: "20px"}}>
            <h1>{`${friend.name}'s Favorite Movies`}</h1>
            <Button>
            <Link to={`/friends/${props.match.params.id}/movies/new`}>Add Movie</Link>
            </Button>

            <Button>
            <Link to='/friends'>Back to Friends</Link>
            </Button>

            {renderMovies()}
        </div> 
    )
}

export default Movies;