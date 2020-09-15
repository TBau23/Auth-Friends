import React, { useState } from 'react';

const Login = () => {

const [credentials, setCredentials] = useState({
    credentials: {
        username: "",
        password: ""
    },
    error: ""
})

const handleChange = e => {
    setCredentials({
        credentials: {
            ...credentials,
            [e.target.name]: e.target.value
        },
        error: ""
    })
}

const login = e => {
    e.preventDefault()

}

return (
<form className='form'>
        <h2>Login</h2>
        <label>Username: &nbsp;
          <input 
          type = 'text'
          name = 'username'
          onChange={handleChange}

          />

        </label>

        <label>Password: &nbsp;
          <input 
          type = 'password'
          name='password'
          onChange={handleChange}
          />

        </label>
      </form>
    )
}

export default Login;