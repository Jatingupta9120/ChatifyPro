import { Grid } from '@mui/material'
import React from 'react'


const Sidebar=()=>{
    return <div>sidebar</div>
}
const AdminLayout = ({children}) => {
  return (
    <Grid container minHeight={"100vh"}>
        <Box sx={{
            display:{xs:"block" ,md:"none"},
            
        }}
        <Grid item xs={12} sm={12} md={4} lg={12} xl={12} sx={{
        display:{
            xs:"none",md:"block"
        }
        
        }}><Sidebar/></Grid>
        <Grid item xs={12} md={8} lg={9} xl={12} sx={{
        bgcolor:"#f5f5f5",
        }}
        >{children}
            </Grid>
    </Grid>
  )
}

export default AdminLayout