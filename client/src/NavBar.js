import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div>
            <h1>NavBar</h1>
            <Link to="/">Home</Link>
            <Link to="/friends/">Friends</Link> 
            <Link to="/friends/new/">New</Link> 
        </div>
    )
}

export default NavBar;