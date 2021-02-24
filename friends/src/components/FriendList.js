import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import Friend from './Friend';

export default function FriendList() {

    const [friendData, setFriendData] = useState([{name: ''}]);

    useEffect(() => {
        axiosWithAuth()
        .get('/api/friends')
        .then(res => {
            console.log(res);
            setFriendData(res.data);
        })
        .catch(err => console.log({ err }));
    },[]);

    return (
        <div>
           Here are your friends!
           {friendData.map(friend => <Friend name={friend.name} age={friend.age} email={friend.email} />)}
        </div>
    )
};
