import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Card, Image } from 'semantic-ui-react'

const Friend = ({friend, deleteFriend}) => {
    return (
        <Card style={{margin: "20px"}}>
            <Card.Content>
                <Image
                floated='right'
                size='mini'
                />
                <Card.Header >{friend.name}</Card.Header>
                <Card.Meta>{friend.sign}</Card.Meta>
                <Card.Meta>{friend.age}</Card.Meta>
                <Card.Description>
                Has a problem with {`${friend.mental_illness}`}
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <div className='ui three buttons'>
                <Button basic color='purple'>
                    <Link style={{color:"green"}} to={`/friends/${friend.id}/movies`}>Movies</Link>
                </Button>
                <Button basic color='yellow'>
                    <Link style={{color:"purple"}} to={`/friends/${friend.id}/edit`}>Edit</Link>
                </Button>
                <Button basic color='red' onClick={() => deleteFriend(friend.id)}>
                    Delete
                </Button>
                </div>
            </Card.Content>
        </Card>
    )
}

export default Friend;