import styled from "styled-components";
import { Link } from "react-router-dom";

export const Button = styled(Link)`
background: rgba(217, 56, 86, 1);
width: 342px;
height: 68px;
padding: 0px 113px 0px 113px;
align-content: center;

border: none;
border-radius: 14px;
font-size: 17px;
font-weight: 900;
line-height: 2.5px;
text-align: center;
color: #ffffff;
cursor: pointer;
margin-top: 90px;

&:hover{
    opacity: 0.6;
}
&:active{
    opacity: 0.9;
}
`;