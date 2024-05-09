import React, { Suspense, lazy, memo, useEffect, useState } from "react";
import PropTypes from 'prop-types'; // Import PropTypes
import { Drawer, Box, IconButton, Tooltip, Grid, Stack, Typography, TextField, Button, Backdrop } from "@mui/material";
import {Add as AddIcon,Delete as DeleteIcon,Done as DoneIcon, Edit as EditIcon,KeyboardBackspace as KeyboardBackspaceIcon, Menu as MenuIcon } from "@mui/icons-material";
import { bggradient, matblack } from '../constants/color';
import { useNavigate, useSearchParams } from "react-router-dom";
import { Link } from '../components/styles/StyledComponents';
import AvatarCard from "../components/shared/AvatarCard";
import { sampleUsers, samplechat } from '../constants/sample';
import UserItem from "../components/shared/UserItem";




const isaddMember=false;

const ConfirnDeleteDialog=lazy(()=>import ("../components/dialogs/ConfirnDeleteDialog"))
const AddMemberDialog=lazy(()=>import ("../components/dialogs/AddMemberDialog"))
const Groups = () => {
  const updateGroupName=()=>{
    setisEdit(false);
    console.log(groupNameUpdatedValue)
  }
  
  const [groupName,setgroupName]=useState("");
  const [groupNameUpdatedValue,setgroupNameUpdatedValue]=useState("");
  const[confirmdeleteDialog,setconfirmDeleteDialog]=useState("false");
  
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
  isEdit?(<><TextField   value={groupNameUpdatedValue} onChange={(e)=>setgroupNameUpdatedValue(e.target.value)} />
  <IconButton onClick={updateGroupName}><DoneIcon/></IconButton></>):(
  <>
    <Typography variant="h4">{groupName}</Typography>
    <IconButton onClick={()=>setisEdit(true)}><EditIcon/></IconButton>
  </>
  )
 }
  </Stack>
  );
  useEffect(()=>{
   if(chatId){
    setgroupName(`Group Name ${chatId}`)
    setgroupNameUpdatedValue(`Group Name ${chatId}`)
   }
    return ()=>{
      //  reset kr rha hun
      setgroupName("")
      setgroupNameUpdatedValue("")
      setisEdit(false)
    }
  },[chatId]) 
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
  const openconfirmDeleteHandler=()=>{
    setconfirmDeleteDialog(true)
    console.log("deleted Group")
  };
  const closeConfirmDeleteHandler=()=>{
    confirmdeleteDialog(false);
    
  }
  const deleteHandler=()=>{
    console.log("Delete Handler")
    closeConfirmDeleteHandler()
  }
  const removeMemberHandler=(id)=>{
      console.log("Remove Member",id)
  }
  const openAddMemberHandler=()=>{
    console.log("Add Member")
  };
  const ButtonGroup=<Stack
   direction={{
    sm:"row"
    ,xs:"coloumn-reverse",
   }} 
   spacing={"1rem"} 
   p={{
    xs:"0",
    sm:"1rem",
    md:"1rem 4rem",
   }}>
   <Button size="large" color="error" startIcon={<DeleteIcon/>} onClick={openconfirmDeleteHandler}> Delete Member</Button>
    <Button size="large" variant="contained" startIcon={<AddIcon/> } onclick={openAddMemberHandler}>Add Member</Button>
    </Stack>
  return (
    <Grid container height={"100vh"}>
      <Grid item xs={12} sx={{
        display: {
          xs: "none",
          sm: "block",
        },
        backgroundImage:bggradient,
      }} sm={4} >
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
            groupName&&<>{GroupName}
            <Typography
            margin={"2rem"} alignSelf={"flex-start"} variant="body1">Members</Typography>
            <Stack maxWidth={"45rem"} width={"100%"} boxSizing={"border-box"}
            padding={{
              sm:"1rem",
              xs:"0",
              md:"1rem 4rem",
            }}
            spacing={"2rem"}
            bgcolor={"bisque"}
            height={"50vh"}
            overflow={"auto"}
            >
              {/* Members */}
              {
                sampleUsers.map((i)=>(
                    <UserItem user={i} key={i._id} isAdded styling={{
                      boxShadow:"0 0 0.5rem 1rem rgba(0,0,0,0.2) ",
                      padding:"1rem 2rem",
                      borderRadius:"1rem",
                    }}
                    handler={removeMemberHandler}
                    />
                ))
              }

              </Stack>
              {ButtonGroup}
              </>
            

          }
      </Grid>

      {
        isaddMember&&(<Suspense   fallback={<Backdrop open/>}>
          <AddMemberDialog/>

        </Suspense>)
      }
      {ConfirnDeleteDialog && (
  <Suspense fallback={<Backdrop open/>}>
    <ConfirnDeleteDialog handleClose={closeConfirmDeleteHandler} open={confirmdeleteDialog} deleteHandler={deleteHandler} />
  </Suspense>
)}

      
      
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
