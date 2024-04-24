import React, { useState } from 'react';
import { Dialog, DialogTitle, InputAdornment, List, Stack, TextField } from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';
import { useInputValidation } from '6pp';
import UserItem from '../shared/UserItem';
import { sampleUsers } from '../../constants/sample';



const Search = () => {
  const search = useInputValidation(""); 
  let isloadingsendFriendRequest= false;
  const [users,setUsers]=useState(sampleUsers);
  const addFriendHandler = (id) => {
    console.log(id);
  }; 
  return (
    <Dialog open>
      <Stack p="2rem" direction="column" width="2rem">
        <DialogTitle textAlign="center">Find People</DialogTitle>
        <TextField
          label=""
          value={search.value}
          onChange={search.changeHandler}
          variant='outlined'
          size='small'
          InputProps={{
            startAdornment: (
              <InputAdornment position='start'>
                <SearchIcon />
              </InputAdornment>
            )
          }}
        />

        <List>
          {users.map((i) => (
            
              <UserItem user={i} key={i._id} handler={addFriendHandler} handlerisloading={isloadingsendFriendRequest} />
           
          ))}
        </List>
      </Stack>
    </Dialog>
  );
};

export default Search;
