import React from 'react'

const UserCard = ({ ghUser }) => {

    return (
        <div>
            <img src={ghUser.avatar_url}/>
            <div>
                <h1>{ghUser.name}</h1>
                <h2>{ghUser.login}</h2>
                <p>Location: {ghUser.location ? ghUser.location : `None`}</p>
                <p>Profile: <a href={ghUser.html_url}>{ghUser.html_url}</a></p>
                <p>Followers: {ghUser.followers}</p>
                <p>Following: {ghUser.following}</p>
                <p>Bio: {ghUser.bio ? ghUser.bio : `None`}</p>
            </div>
        </div>
    )
}

export default UserCard