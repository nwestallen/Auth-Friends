import React, { useState, useEffect } from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { useHistory } from 'react-router-dom';

export default function Login() {

    const [formData, setFormData] = useState({username: '', password: '', isLoading: false});

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData({...formData, [name]: value});
    };

    const history = useHistory();

    const handleSubmit = e => {
        e.preventDefault();
        setFormData({...formData, isLoading: true});
        axiosWithAuth()
            .post('/api/login', formData)
            .then(res => {
                console.log(res);
                localStorage.setItem('token', JSON.stringify(res.data.payload));
                history.push('/friends')
            })
            .catch(err => console.log({ err }));
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h2>Login</h2>
                <label>
                    Username:
                    <input type='text' name='username' value={formData.username} onChange={handleChange}/>
                </label>
                <label>
                    Password:
                    <input type='password' name='password' value={formData.password} onChange={handleChange}/>
                </label>
                <button>Submit</button>
            </form>
        </div>
    )
}
