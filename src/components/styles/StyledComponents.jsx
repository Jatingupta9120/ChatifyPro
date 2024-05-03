import { styled } from "@mui/material";
 
import {Link as linkcomponent} from "react-router-dom"
import { greycolor } from "../../constants/color";
export const VisuallyhiddenInput=  styled("input")
({
    border:0,
    height:1,
    margin:-1,
    position:0,
    whiteSpace:"nowrap",
    width:1,
    padding:0,
    overflow:"hidden",  
    clip:"rect(0,0,0,0)",

});


export const Link=styled(linkcomponent)`
text-decoration=none;
color:black;
padding:1rem;
&hover{
    background-color:rgba(0,0,0,0.1);
}`;

export const Inputbox = styled("input")`
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  padding: 0 3rem;
  border-radius: 1.5rem;
  background-color: ${greycolor}; 
`;
