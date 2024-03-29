import { Appbar,Box } from "@mui/material"


const Header = () => {
  return (
    <Box sx={{flexGrow:1}} height={"4rem"}>
      <Appbar position="static" sx={{
        bgcolor="#ea7070"
      }}/>
    </Box>
  )
}

export default Header