import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Button } from 'semantic-ui-react'

const NavBar = () => {
    return (
        // <div>
        //     <h1>NavBar</h1>
        //     <Link to="/">Home</Link>
        //     <Link to="/friends/">Friends</Link> 
        //     <Link to="/friends/new/">New</Link> 
        // </div>
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