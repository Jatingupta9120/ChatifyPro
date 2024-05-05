import React, { memo, useState } from "react";
import PropTypes from 'prop-types'; // Import PropTypes
import { Drawer, Box, IconButton, Tooltip, Grid, Stack, Typography, TextField } from "@mui/material";
import {Done as DoneIcon, Edit as EditIcon,KeyboardBackspace as KeyboardBackspaceIcon, Menu as MenuIcon } from "@mui/icons-material";
import { matblack } from '../constants/color';
import { useNavigate, useSearchParams } from "react-router-dom";
import { Link } from '../components/styles/StyledComponents';
import AvatarCard from "../components/shared/AvatarCard";
import { samplechat } from '../constants/sample';

const Groups = () => {
  const updateGroupName=()=>{
    setisEdit(false);
  }
  const [groupName,setgroupName]=useState("");
  const [groupNameUpdatedValue,setgroupNameUpdatedValue]=useState("");
  
  const chatId = useSearchParams()[0].get("groups");
  const handleMobile = () => {
    setismobilemenuopen(prev => !prev);
  };
  const handleMobileClose = () => {
    setismobilemenuopen(false);
  };
  const [ismobilemenuopen, setismobilemenuopen] = useState(false);
  const [isEdit,setisEdit]=useState(false);
  const navigate = useNavigate();
  const navigateBack = () => {
    navigate("/");
  };

  const GroupName=(
  <Stack direction={"row"} alignItems={"center"} justifyContent={"center"} spacing={"1rem"} padding={"1rem"}> 
 {
  isEdit?(<><TextField/>
  <IconButton onClick={updateGroupName}><DoneIcon/></IconButton></>):(
  <>
    <Typography variant="h4">Group Name</Typography>
    <IconButton onClick={()=>setisEdit(true)}><EditIcon/></IconButton>
  </>
  )
 }
  </Stack>
  );
  
  const IconBtns = (
    <>
      <Box sx={{
        display: {
          xs: "block",
          sm: "none",
          position: "fixed",
          top: "1rem",
        },
      }}>
        <IconButton onClick={handleMobile}>
          <MenuIcon />
        </IconButton>
      </Box>
      <Tooltip title="back">
        <IconButton sx={{
          position: "absolute",
          top: "2rem",
          left: "2rem",
          bgcolor: matblack,
          color: "white",
          ":hover": {
            bgcolor: "rgba(0,0,0,0.7)",
          }
        }}
          onClick={navigateBack}>
          <KeyboardBackspaceIcon />
        </IconButton>
      </Tooltip>
    </>
  );

  return (
    <Grid container height={"100vh"}>
      <Grid item xs={12} sx={{
        display: {
          xs: "none",
          sm: "block",
        },
      }} sm={4} bgcolor={"bisque"}>
        <GroupList w={"50vw"} myGroups={samplechat} chatId={chatId} />
      </Grid>
      <Grid item xs={12} sm={8} sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        position: "relative",
        padding: "1rem 3rem",
      }}>
        {IconBtns}
          {
            GroupName
          }
      </Grid>
      <Drawer sx={{
        display: {
          xs: "block",
          sm: "none",
        }
      }} open={ismobilemenuopen} onClose={handleMobileClose}>
        <GroupList w={"50vw"} />
      </Drawer>
    </Grid>
  );
}

const GroupList = ({ w = "100%", myGroups = [], chatId }) => (
  <Stack width={w}>
    {myGroups.length > 0 ? (
      myGroups.map((group) => <GroupListItems group={group} chatId={chatId} key={group._id} />)
    ) : (
      <Typography textAlign={"center"}>No Groups</Typography>
    )}
  </Stack>
);

const GroupListItems = memo(({ group, chatId }) => {
  const { name, avatar, _id } = group;
  return (
    <Link to={`?group=${_id}`} onClick={e => {
      if (chatId === _id) e.preventDefault();
    }}>
      <Stack direction="row" spacing={"1rem"} alignItems={"center"}>
        <AvatarCard avatar={avatar} />
        <Typography>{name}</Typography>
      </Stack>
    </Link>
  );
});

GroupList.propTypes = {
  w: PropTypes.string,
  myGroups: PropTypes.arrayOf(PropTypes.object),
  chatId: PropTypes.string 
};
GroupListItems.propTypes = {
  group: PropTypes.shape({
    name: PropTypes.string.isRequired, 
    avatar: PropTypes.string.isRequired,
    _id: PropTypes.string.isRequired
  }).isRequired,
  chatId: PropTypes.string.isRequired
};


Groups.displayName = "Groups";
GroupList.displayName = "GroupList";
GroupListItems.displayName = "GroupListItems";

export default Groups;
