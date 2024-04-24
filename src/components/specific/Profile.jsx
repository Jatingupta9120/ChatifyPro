import PropTypes from 'prop-types';
import { Avatar, Stack, Typography } from '@mui/material'
import React from 'react'
import {face as FaceIcon ,AlternateEmail as UserNameIcon ,CalendarMonth as CalendarIcon} from '@mui/icons-material'
import moment from 'moment/moment'

const Profile = () => {
  return (
    <Stack spacing={"2rem"} direction={"column"} alignItems={"center"} >
        <Avatar 
        sx={{
            width:200,
            height:200,
            marginBottom:"1rem",
            objectFit:"contain",
            border:"5px solid  white",

        }}/>
        <Profilecard heading={"Bio"} text={"A Software Engineer"}/>
        <Profilecard heading={"Username"} text={"@jatin99"} Icon={<UserNameIcon/>}/>
        <Profilecard heading={"Name"} text={"Jatin Gupta"}Icon= {<FaceIcon/>}/>
        <Profilecard heading={"Joined"} text={moment('2024-04-24T00:00:00.000Z').fromNow()} Icon= {<CalendarIcon/>}/>
        </Stack>
  )
}
const Profilecard = ({text,Icon,heading}) => (
<Stack direction={"row"} alignItems={"center"} spacing={"1rem"} color={"white"} textAlign={"center"}>
    {Icon && Icon}
    <Stack>
        <Typography variant="body1">{text}</Typography>
        <Typography color={"gray"} variant="caption">{heading}</Typography>
    </Stack>
</Stack>
)
  
Profilecard.propTypes = {
    text: PropTypes.string.isRequired,
    Icon: PropTypes.elementType,
    heading: PropTypes.string.isRequired
  };


export default Profile