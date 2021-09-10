import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Button } from 'semantic-ui-react'

const NavBar = () => {
    return (
        <Menu>
            <Menu.Item>
                <Button>
                    <Link to="/">Home</Link>
                </Button>
            </Menu.Item>
        
            <Menu.Item>
                <Button>
                    <Link to="/friends/">Friends</Link> 
                </Button>
            </Menu.Item>

            <Menu.Item>
                <Button>
                    <Link to="/friends/new">New Friend</Link> 
                </Button>
            </Menu.Item>
        </Menu>
    )
}

export default NavBar;