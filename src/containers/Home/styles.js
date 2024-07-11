import styled from "styled-components";
import backgroud from "../../assents/background1.svg";


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
margin-top: 30px;

`;

export const ImputLabel = styled.p`
letter-spacing: -0.408px;
font-style: normal;
font-weight: bold;
line-height: 22px;
font-size: 18px;
color: #eeeeee;
border: none;
margin-left: 25px;
`;

export const Input = styled.input`
width: 342px;
height: 58px;
background: rgba(255, 255, 255, );
border-radius: 14px;
padding-left: 25px;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

border: none;
outline: none;

margin-bottom: 34px;
font-family: Roboto;
font-size: 24px;
font-weight: 400;
line-height: 28.13px;
text-align: left;

`;






