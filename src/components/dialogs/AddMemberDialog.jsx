/* eslint-disable no-unused-vars */

import { Button, Dialog, DialogTitle, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import { sampleUsers } from '../../constants/sample'
import { UserItem } from '../../components/shared/UserItem'


const AddMemberDialog = (addMeber, isLoadingAddMember, chatId) => {


    const selectMemberHandler = (id) => {
        setmembers(prev => prev.map(user => user._id === id ? { ...user, isAdded: !user.isAdded } : user));
        setselectedMember((prev) => prev.includes(id) ? prev.filter((currelement) => currelement !== id) : [...prev, id]);
    };
    
    const [members, setmembers] = useState(sampleUsers);
    const [selectMember, setselectedMember] = useState([]);
    
    const addMemberSubmitHandler = () => {
        closeHandler()
    }
    const closeHandler = () => {
        setselectedMember([])
        setmembers([])
    }

    
    return <Dialog open onClose={closeHandler}>
        <Stack p={"2rem "} width={"20rem"} spacing={"2rem"}>
            <DialogTitle textAlign={"center"}>
                Add Member
            </DialogTitle>
            <Stack spacing={"1rem"}>
                {members.length > 0 ?
                    members.map(i => (
                        <UserItem key={i._id} user={i}  isAdded={selectMember.includes(i._id)} handler={selectMemberHandler} />
                    )) : (<Typography textAlign={"center"}>No Friend Found</Typography>)
                }

            </Stack>

            <Stack direction={"row"} alignItems={"center"} justifyContent={'space-evenly'}>
                <Button onClick={closeHandler} color='error'>Cancel</Button>
                <Button onClick={addMemberSubmitHandler} variant="contained" disabled={isLoadingAddMember}>Submit Changes</Button>
            </Stack>
        </Stack>

    </Dialog>
}

export default AddMemberDialog