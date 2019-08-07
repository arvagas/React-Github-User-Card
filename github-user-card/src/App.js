import React from 'react'
import axios from 'axios'

import UserCard from './components/UserCard'
import SearchForm from './components/SearchForm'

import { Box } from '@material-ui/core'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      userName: null,
      searchUser: null,
      ghUser: [],
      ghUserFollowers: []
    }
  }

  componentDidMount() {
    const user = this.state.userName
    if (user !== null) {
      axios.get(`https://api.github.com/users/${user}`)
      .then(res => {
        this.setState({ghUser: res.data})
      })
      .catch(err => console.log('API Error: ', err))

      axios.get(`https://api.github.com/users/${user}/followers`)
      .then(res => {
        const followerArr = res.data
        this.setState({ghUserFollowers: followerArr})
      })
      .catch(err => console.log('API Error: ', err))
    }
  }

  componentDidUpdate() {
    if ((this.state.userName !== this.state.searchUser) && (this.state.searchUser !== null)) {
      this.setState({userName: this.state.searchUser})
      const user = this.state.searchUser

      axios.get(`https://api.github.com/users/${user}`)
      .then(res => {
        this.setState({ghUser: res.data})
      })
      .catch(err => console.log('API Error: ', err))

      axios.get(`https://api.github.com/users/${user}/followers`)
      .then(res => {
        const followerArr = res.data
        this.setState({ghUserFollowers: followerArr})
      })
      .catch(err => console.log('API Error: ', err))
    }
  }

  searchUser = searchName => {
    this.setState({searchUser: searchName})
  }

  render() {
  
    return (
      <Box display='flex' flexDirection='column'>
        <SearchForm searchUser={this.searchUser}/>
        <UserCard key={this.state.ghUser.id} ghUser={this.state.ghUser} ghUserFollowers={this.state.ghUserFollowers} searchUser={this.searchUser}/>
      </Box>
    )
  }
}

export default App;