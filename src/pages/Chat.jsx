import { IconButton, Stack } from '@mui/material';
import AppLayout from '../components/layout/AppLayout';
import { greycolor,orange } from '../constants/color';
import React, { useRef } from "react";
import MessageComponent from "../components/shared/MessageComponent";
import { AttachFile as AttachFileIcon, Send as SendIcon } from '@mui/icons-material';
import Inputbox from '../components/styles/StyledComponents'; // Import Inputbox component
import FileMenu from '../components/dialogs/FileMenu';
import { sampleMessage } from '../constants/sample';


const user={
  _id:"lfkshflslfj",
  name:"John",

}

const Chat = () => {
  const containerRef = useRef(null);

  return (
    <>
    
      <Stack ref={containerRef} boxSizing="border-box" padding="1rem" spacing="1rem" bgcolor={greycolor} height="90%" sx={{
        overflowX: "hidden",
        overflowY: "auto",
      }}>

        {
          sampleMessage.map(i=>{
            <MessageComponent  key={i._id}message={i} user={user}/>
          })
        }
       
      </Stack>
      <form style={{ height: "10%" }}>
        <Stack direction={"row"}  height={"100%"} padding={"1rem"} position={"relative"}  alignItems={"center"}>
          <IconButton sx={{
            position:"absolute",
            left:"1.5rem",
            rotate:"30deg",
            "&:hover":{
              bgcolor:"error.dark",
            }
          }}>
            <AttachFileIcon />
          </IconButton>
          <Inputbox placeholder="Type message here ..." /> 
          <IconButton type={"submit"} sx={{
            backgroundColor:orange,
            color:"white",
            marginleft:"1rem",
            padding:"0.5rem",
            "&:hover":{
              bgcolor:"error.dark",
            }
          }}>
            <SendIcon />
          </IconButton>
        </Stack>
      </form>
      <FileMenu />
    </>
  );
};

export default AppLayout()(Chat);
