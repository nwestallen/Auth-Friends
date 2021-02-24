import React, { useState } from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth';

function AddFriendForm() {

    const [formData, setFormData] = useState({name: '', age: '', email:''});

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData({...formData, [name]: value});
    };

    const handleSubmit = e => {
        axiosWithAuth()
        .post('/api/friends', {...formData, id: '8'})
        .then(res => console.log(res))
        .catch(err => console.log(err));
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h2>Add a New Friend</h2>
                <label>Name:
                    <input type='text' name='name' value={formData.name} onChange={handleChange}/>
                </label>
                <label>
                    Age:
                    <input type='text' name='age' value={formData.age} onChange={handleChange}/>
                </label>
                <label>
                    Email:
                    <input type='text' name='email' value={formData.email} onChange={handleChange}/>
                </label>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default AddFriendForm
