import React, { useState, useEffect } from 'react'

export default function Login() {

    const [formData, setFormData] = useState({username: '', password: ''});

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData({...formData, [name]: value});
    };

    return (
        <div>
            <form>
                <h2>Login</h2>
                <label>
                    Username:
                    <input type='text' name='username' value={formData.username} onChange={handleChange}/>
                </label>
                <label>
                    Password:
                    <input type='password' name='password' value={formData.password} onChange={handleChange}/>
                </label>
            </form>
        </div>
    )
}
