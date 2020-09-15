import React, { useState } from 'react';
import './App.css';

function App() {

  const [credentials, setCredentials] = useState()



  return (
    <div className="App">
      <h1>Authentication Practice</h1>
      <form className='form'>
        <h2>Login</h2>
        <label>Username: &nbsp;
          <input 
          type = 'text'
          name = 'username'

          />

        </label>

        <label>Password: &nbsp;
          <input 
          type = 'password'
          name='password'
          />

        </label>
      </form>

    </div>
  );
}

export default App;
