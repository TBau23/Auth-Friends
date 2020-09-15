import React from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';


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
            <div>
                {this.state.friendsList.map(friend => (
                    <h2 key={friend.id}>{friend.name}</h2>
                ))}
            </div>
        </div>
    )
}
}

export default UserPage;