import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Card, Image } from 'semantic-ui-react'


const Movie = ({ movie, deleteMovie}) => {
    return (
        <div>
            <Card style={{margin: "20px"}}>
            <Card.Content>
                {/* <Image
                floated='right'
                size='mini'
                /> */}
                <Card.Header >{movie.title}</Card.Header>
                <Card.Meta>{movie.genre}</Card.Meta>
                {/* <Card.Description>
                Has a problem with {`${friend.mental_illness}`}
                </Card.Description> */}
            </Card.Content>
            <Card.Content extra>
                <div className='ui two buttons'>
                <Button basic color='orange'>
                    <Link style={{color:"teal"}} to={`/friends/${movie.friend_id}/movies/${movie.id}/edit`}>Edit Movie</Link>
                </Button>
                <Button basic color='red' onClick={() => deleteMovie(movie.id)}>DeleteMovie</Button>
                </div>
            </Card.Content>
        </Card>
        </div>
    )
     };
    

export default Movie;