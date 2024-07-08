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
margin: 30px;

`;

export const H1 = styled.h1`
font-style: normal;
font-size: 34px;
font-weight: bold;
line-height: 40px;
text-align: center;
color: #ffffff;
margin-bottom: 40px;


`;

export const ContainerItens = styled.div`
/*width: 414px;
height: 645px;
top: 251px;
gap: 0px;
opacity: 0px;*/
background: linear-gradient(157.44deg,
rgba(255, 255, 255, 0.6) 0.84%, 
rgba(255, 255, 255, 0.6) 0.85%, 
rgba(255, 255, 255, 0.15) 100%);
border-radius: 61px 61px 0px 0px;
padding: 50px 36px;
display: flex;
flex-direction: column;
height: 100vh;
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

export const Button = styled.button`
background: rgba(0, 0, 0, 0.8);
width: 342px;
height: 74px;
margin-top: 130px;

gap: 0px;
border-radius: 14px;
opacity: 0px;
border: none;

width: Hug (97px)px;
height: Hug (28px)px;
top: 23px;
left: 118px;
gap: 14px;
line-height: 28px;
color: #ffffff;
cursor: pointer;

display: flex;
align-items: center;
justify-content: center;
gap: 20px;

&:hover{
    opacity: 0.8;
}
&:active{
opacity: 0.5;
}

`




