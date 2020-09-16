import React from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth'

class Login extends React.Component {

state = {
    credentials: {
        username: "",
        password: ""
    },
    error: ""
}

navigateToUserPage = () => {
    const { history } = this.props
    history.push("/userpage")
}

 handleChange = e => {
    this.setState({
        credentials: {
            ...this.state.credentials,
            [e.target.name]: e.target.value
        },
        error: ""
    })
}

 login = e => {
    e.preventDefault()

    axiosWithAuth()
        .post("/api/login", this.state.credentials)
        .then(res => {
            localStorage.setItem("token", res.data.payload);

            this.navigateToUserPage();
        })
        .catch(error => {
            console.log(error)
        });


}
render() {
    return (
    <div>
    <form onSubmit={this.login} className='form'>
        <h2>Login</h2>
        <label>Username: &nbsp;
        <input 
        type = 'text'
        name = 'username'
        value={this.state.credentials.username}
        onChange={this.handleChange}

        />

        </label>

        <label>Password: &nbsp;
        <input 
        type = 'password'
        name='password'
        value={this.state.credentials.password}
        onChange={this.handleChange}
        />

        </label>
        <button>Log In</button>
    </form>
    <p style={{ color: 'red'}}>{this.state.credentials.error}</p>
    </div>
    )
}}

export default Login;