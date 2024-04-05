import React from 'react'
import { Grid,Skeleton } from '@mui/material';
const Loaders = () => {
  return (
    <Grid container height={"calc(100vh-4rem)"} spacing={"1rem"}>
    <Grid  item sm ={4} md={3} sx={{
        display:{xs:"none" ,sm: "block"}

    }} height={"100%"}><Skeleton vriant="rectangular"/></Grid>
    <Grid  item xs={12} sm={8} md={5} lg={6} height={"100%"}>
        <stack spacing={"1rem"}>
            {Array.from ({length:10}).map((_,index)=>{
                <Skeleton key={index} variant={"rectangular"} height={"rem"}/>
            })}
        </stack>
         </Grid>
    <Grid  item sm ={4} md={4} lg={3} height={"100% "} 
    sx={{
        display:{xs:"none" ,md: "block"},
       

    }} ><Skeleton vriant="rectangular" height={"100vh"}/></Grid>
    
    </Grid>
  )
}

export default Loaders