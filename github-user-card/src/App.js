import React from 'react'
import axios from 'axios'

import UserCard from './components/UserCard'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      ghUser: [],
      ghUserFollowers: []
    }
  }

  componentDidMount() {
    const userName = 'arvagas'

    axios.get(`https://api.github.com/users/${userName}`)
    .then(res => {
      this.setState({ghUser: res.data})
    })
    .catch(err => console.log('API Error: ', err))

    axios.get(`https://api.github.com/users/${userName}/followers`)
    .then(res => {
      const followerArr = res.data
      this.setState({ghUserFollowers: followerArr})
    })
    .catch(err => console.log('API Error: ', err))
  }

  render() {
  
    return (
      <div>
        <UserCard key={this.state.ghUser.id} ghUser={this.state.ghUser} ghUserFollowers={this.state.ghUserFollowers}/>
        {/* {this.state.ghUserFollowers.map(follower => (
          <UserCard key={follower.id} ghUser={follower}/>
        ))} */}
      </div>
    )
  }
}

export default App;