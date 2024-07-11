import styled from "styled-components";

import backgroud from "../../assents/background2.svg";


export const Container = styled.div`
background: url("${backgroud}");
background-size: cover;

    gap: 40px;
    align-items: center;
    flex-direction: column;
    display: flex;
    height: 100vh;

`;
export const Image = styled.img`
margin: 30px;

`;

export const User = styled.li`
    justify-content: space-around;
    display: flex;
    height: 58px;
    align-items: center;
    margin-top: 20px;
width: 342px;
height: 58px;
background: rgba(255, 255, 255, 0.25);
border-radius: 14px;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border: none;
    outline: none;

    p {

font-size: 20px;
font-weight: normal;
line-height: 28px;
text-align: left;
color: #ffffff;
}

button {
background: none;
border: none;
cursor: pointer;

}

`



