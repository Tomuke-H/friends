import React from 'react'
import { Link } from 'react-router-dom'

const Movie = ({ movie, deleteMovie}) => {
    return (
        <div>
            <h1>Movie title: {movie.title}</h1>
            <h3>Genre: {movie.genre}</h3>
            <Link to={`/friends/${movie.friend_id}/movies/${movie.id}/edit`}>Edit</Link>
            <button onClick={() => deleteMovie(movie.id)}>Delete</button>
        </div>
    )
}

export default Movie;