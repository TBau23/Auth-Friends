import React from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

import AddFriend from './AddFriend'

class UserPage extends React.Component  {

    state = {
        friendsList: []
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

render() {
    return(
        <div>
            <h2>Authenticated Users Only</h2>
            <AddFriend />
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