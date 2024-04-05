import { styled } from "@mui/material";
 
import {Link as linkcomponent} from "react-router-dom"
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
    background-color:#f0f0f0;
}`;
<VisuallyhiddenInput/>