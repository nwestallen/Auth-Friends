import React from 'react';

const Friend = props => {

    const { name, age, email} = props;

    return (
        <div>
            <h2>{name}</h2>
            <p>Age: {age}</p>
            <p>Email: {email}</p>
        </div>
    )
};

export default Friend;
