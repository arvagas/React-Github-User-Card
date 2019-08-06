import React from 'react'

import { Box, Container, Avatar, Typography, Link } from '@material-ui/core'
import { userCardStyles } from '../StyledComps'

const UserCard = ({ ghUser }) => {
    const classes = userCardStyles()

    return (
        <Box display='flex' flexDirection='column' m={3} p={2.4} border={1}>
            <Box display='flex' flexDirection='row' mb={2.4}>
                <Avatar src={ghUser.avatar_url} className={classes.bigAvatar}/>
                <Container>
                    <Typography variant='h5'>{ghUser.name}</Typography>
                    <Typography variant='subtitle1' fontStyle='italic'>
                        <Box fontStyle='italic'>{ghUser.login}</Box>
                    </Typography>
                    <Typography variant='body2'>
                        Location: {ghUser.location ? ghUser.location : `None`}
                        <br/>Profile: <Link href={ghUser.html_url}>{ghUser.html_url}</Link>
                        <br/>Followers: {ghUser.followers}
                        <br/>Following: {ghUser.following}
                        <br/>Bio: {ghUser.bio ? ghUser.bio : `None`}
                    </Typography>
                </Container>
            </Box>
            <img
                src={`http://ghchart.rshah.org/${ghUser.login}`}
                alt={`${ghUser.login}'s Github contribution chart`}
                style={{maxWidth:'700px', width:'100%', alignSelf:'center'}}
            />
        </Box>
    )
}

export default UserCard