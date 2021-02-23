import React, { useState } from 'react'

export default function Login() {

    const [formData, setFormData] = useState();

    return (
        <div>
            <form>
                <h2>Login</h2>
                <label>
                    Username:
                    <input type='text' name='username' />
                </label>
                <label>
                    Password:
                    <input type='password' name='password' />
                </label>
            </form>
        </div>
    )
}
