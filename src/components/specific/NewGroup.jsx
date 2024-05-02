import { useInputValidation } from '6pp';
import { Button, Dialog, DialogTitle, Stack, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Sampleusers } from '../../constants/sample';
import UserItem from '../shared/UserItem';
const NewGroup = () => {
  const selectMemberHandler=(id)=>{
    setmembers(prev=>prev.map(user=>user._id===id?{...user,isAdded:!user.isAdded}:user));
    setselectedMember((prev)=>prev.includes(id)?prev.filter((currelement)=>currelement!==id):[...prev,id]);
  };
  const submitHandler=()=>{

  };
  const closeHandler=()=>{};
  const [members,setmembers]=useState(Sampleusers); 
  const [selectMember,setselectedMember]=useState([]);

  const groupName=useInputValidation("");
  return (
    
    <Dialog open onClose={closeHandler}>
      <Stack p={{xs:"1rem" ,sm:"3rem"}} width={"25rem"} spacing={"2rem"} >
        {/* new group */}
        <DialogTitle textAlign={"center"} variant='h4'>New Group</DialogTitle>
        {/* Group ka name */}
        <TextField label="Group Name" value={groupName.value} onChange={groupName.changeHandler}/>
        {/* Members  */}
      <Typography variant='body1'>Members</Typography>

      <Stack>
      {members.map((i) => (
            
            <UserItem user={i} key={i._id} handler={selectMemberHandler}  isAdded={selectMember.includes(i._id)}/>
         
      ))}
      </Stack>
      <Stack direction={"row"} justifyContent={'space-evenly'}> 
      <Button variant="outlined"  color='error' size="large">Cancel</Button>
      <Button variant="contained" size="large">Create</Button>
      </Stack>
        
      
      
      
      
      
      </Stack>
      

    </Dialog>
  )
}

export default NewGroup