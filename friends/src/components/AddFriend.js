import React from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth'

class AddFriend extends React.Component {

    state = {
        friend: {
            id: "",
            name: "",
            age: "",
            email: ""
        }
    }

    handleChange = e => {
        this.setState({
            friend: {
                ...this.state.friend,
                [e.target.name] : e.target.value
            }
        })
    }

    postFriend = e => {
        e.preventDefault()

        axiosWithAuth()
            .post("/api/friends", this.state.friend)
            .then(res => {
                console.log(res)
            })
            .catch(error => {
                console.log(error)
            })
    }


render() {
    return (
        <div>
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
        </div>
)
}

}

export default AddFriend;