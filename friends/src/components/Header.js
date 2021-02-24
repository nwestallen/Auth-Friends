import React from 'react';
import { Link } from 'react-router-dom';

const FriendHeader = () => {

    const handleLogOut = e => {
        e.preventDefault();
        localStorage.removeItem('token');
    };

    return (
        <div>
            <h1>FriendZone</h1>
            <nav>
                <Link to='/login'>Login</Link>
                <Link to='/friends'>Friends</Link>
            </nav>
            <button onClick={handleLogOut}>Logout</button>
        </div>
    )
};

export default FriendHeader;
