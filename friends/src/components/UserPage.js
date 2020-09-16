import React from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

import AddFriend from './AddFriend'

class UserPage extends React.Component  {

    state = {
        friendsList: [],
        friend: {
            id: new Date(),
            name: "",
            age: "",
            email: ""
        }
    }

    componentDidMount() {
        this.getData()
    }

    getData = () => {

        axiosWithAuth()
        .get("/api/friends")
        .then(res => {
            console.log(res)
            this.setState({
                friendsList: res.data
            })
        })
        .catch(error => {
            console.log(error)
        })
    }

    postFriend = e => {
        e.preventDefault()

        axiosWithAuth()
            .post("/api/friends", this.state.friend)
            .then(res => {
                this.setState({
                    friendsList: res.data
                })
            })
            .catch(error => {
                console.log(error)
            })
    }

    handleChange = e => {
        this.setState({
            friend: {
                ...this.state.friend,
                [e.target.name] : e.target.value
            }
        })
    }

render() {
    return(
        <div>
            <h2>Authenticated Users Only</h2>
            <form className='add-friend' onSubmit={this.postFriend}>
                <h2>Add a Friend</h2>
                <label>Name
                    <input
                    type='text'
                    name='name'
                    placeholder="enter friend's name"
                    value={this.state.friend.name}
                    onChange={this.handleChange}
                    />
                </label>

                <label>Age
                    <input
                    type='text'
                    name='age'
                    placeholder="enter friend's age"
                    value={this.state.friend.age}
                    onChange={this.handleChange}
                    />
                </label>

                <label>Email
                    <input
                    type='email'
                    name='email'
                    placeholder="enter friend's age"
                    value={this.state.friend.email}
                    onChange={this.handleChange}
                    />
                </label>

                <button>Click to Add Friend</button>

            </form>
            <div>
                <h2>Your friends:</h2>
                {this.state.friendsList.map(friend => (
                    <div key={friend.id}>
                        <h2 >{friend.name}</h2>
                        <p>Age: {friend.age}</p>
                        <p>Email: {friend.email}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
}

export default UserPage;