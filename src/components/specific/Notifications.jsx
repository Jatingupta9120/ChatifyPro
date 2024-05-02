import { Avatar,Button,Dialog, DialogTitle, ListItem, Stack, Typography } from '@mui/material';
import React, { memo } from 'react';
import { sampleNotification } from '../../constants/sample';
const Notifications = () => {
  return (
    <Dialog open>
      <Stack p={{xs:"1rem" ,sm:"2rem"}} maxWidth={"25rem"} >
        <DialogTitle>Notifications</DialogTitle>
        {
          sampleNotification.length>0?(
          sampleNotification.map(({sender,_id})=>(
            <NotificationItem 
            sender={sender}
            _id={_id}
            handler={friendRequesthandler}
            key={_id}

            />
          ))
          ):(
          <Typography textAlign={"center"}>0 Notification</Typography>
        )
        }
      </Stack>
    </Dialog>
  );
};
const NotificationItem=memo(({sender,_id,handler})=>{
  const {name,Avatar}=sender;
  return (
  <ListItem>
  <Stack
      direction="row"
      alignItems="center"
      spacing="1rem"
      width="100%"
  >
      <Avatar  src={Avatar}/>
      <Typography
          variant="body1"
          display="-webkit-box"
          webkitLineClamp={1}
          webkitBoxOrient="vertical"
          overflow="hidden"
          textOverflow="ellipsis"
      >
         {`${name} sent you a friend request. `}
      </Typography>
      <Stack {{
        xs:"column",
        sm:"row"
      }}>

        <button onClick={()=>handler({_id,accept:true})}>Accept</button>
        <button color="error" onClick={()=>handler({_id,accept:false})}>Reject</button>
        
      </Stack>
  </Stack>
</ListItem>
);
})

export default Notifications;