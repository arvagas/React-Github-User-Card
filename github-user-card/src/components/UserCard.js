import React from 'react'

import { Box, Container, Avatar, Typography, Link, Divider } from '@material-ui/core'
import { userCardStyles } from '../StyledComps'

const UserCard = ({ ghUser, ghUserFollowers, searchUser }) => {
    const classes = userCardStyles()

    return (
        <Box display='flex' flexDirection='column' m={3} p={2.4} border={1}>
            <Box display='flex' flexDirection='row' mb={2.4}>
                <Avatar src={ghUser.avatar_url} className={classes.bigAvatar}/>
                <Container>
                    <Typography variant='h5'>{ghUser.name ? ghUser.name : 'Name'}</Typography>
                    <Typography variant='subtitle1'>
                        <Box fontStyle='italic'>{ghUser.login ? ghUser.login : 'handle'}</Box>
                    </Typography>
                    <Typography variant='body2' component='div'>
                        Location: {ghUser.location ? ghUser.location : `None`}
                        <Divider />
                        Profile: <Link href={ghUser.html_url}>{ghUser.html_url ? ghUser.html_url : ''}</Link>
                        <Divider />
                        Following: {ghUser.following}
                        <Divider />
                        Followers: {ghUser.followers}
                        <br></br>
                        {ghUser.followers > 30 ? 'Latest 30 followers: ' : ''}
                            {ghUserFollowers.map(follower => (
                                <span><Link key={follower.id} onClick={() => searchUser(follower.login)} className={classes.linkFollower}>
                                    {follower.login ? follower.login : ''}
                                </Link>, </span>
                            ))}
                        <Divider />
                        Bio: {ghUser.bio ? ghUser.bio : `None`}
                    </Typography>
                </Container>
            </Box>
            <img
                src={`https://ghchart.rshah.org/${ghUser.login}`}
                alt={`${ghUser.login}'s Github contribution chart`}
                style={{maxWidth:'702px', width:'100%', maxHeight:'104px', alignSelf:'center'}}
            />
        </Box>
    )
}

export default UserCard