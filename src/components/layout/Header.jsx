import { Appbar,Box } from "@mui/material"
import { orange } from "@mui/material/colors"


const Header = () => {
  return (
    <Box sx={{flexGrow:1}} height={"4rem"}>
      <Appbar position="static" sx={{
       bgcolor:orange
      }}

      </Appbar>
    </Box>
  )
}

export default Header