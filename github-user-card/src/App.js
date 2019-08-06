import React from 'react'
import axios from 'axios'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      ghUser: []
    }
  }

  componentDidMount() {
    const userName = 'arvagas'
    axios.get(`https://api.github.com/users/${userName}`)
    .then(res => {
      this.setState({ghUser: res.data})
    })
    .catch(err => console.log('API Error: ', err))
  }

  render() {
  
    return (
      <div>
      </div>
    )
  }
}

export default App;