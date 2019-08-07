import React from 'react'

import { Box } from '@material-ui/core'

class SearchForm extends React.Component {
    constructor() {
        super()
        this.state = {
            search: ''
        }
    }

    handleChanges = event => {
        this.setState({
            [event.target.name]:event.target.value
        })
    }

    searchUserInfo = event => {
        event.preventDefault()
        this.props.searchUser(this.state.search)
        this.searchInput.value = ''
    }

    render() {
        return (
            <Box m={2} alignSelf='center'>
                <form onSubmit={this.searchUserInfo}>
                    <input
                        type='text'
                        placeholder='Search for a user...'
                        value={this.search}
                        name='search'
                        onChange={this.handleChanges}
                        ref={el => {this.searchInput = el}}
                    />
                    <button type="submit">Search</button>
                </form>
            </Box>
        )
    }
}

export default SearchForm