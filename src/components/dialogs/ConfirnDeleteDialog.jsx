/* eslint-disable react/prop-types */
import { Dialog, DialogTitle,DialogContent,DialogContentText, DialogActions, Button } from '@mui/material'
import React from 'react'

const ConfirnDeleteDialog = ({open,handleClose ,deleteHandler}) => {
  return (
    <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Confirm Delete</DialogTitle>
        <DialogContent>
            <DialogContentText>
                Are You Sure want to delete this group?
            </DialogContentText>
        </DialogContent>
        <DialogActions>
            <Button onClick={handleClose}>No</Button>
            <Button  onClick={deleteHandler} color='error'>Yes</Button>

        </DialogActions>
    </Dialog>
  )
}

export default ConfirnDeleteDialog