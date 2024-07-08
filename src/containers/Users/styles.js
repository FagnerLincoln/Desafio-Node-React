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
backdrop-filter: blur(45px);
border-radius: 61px 61px 0px 0px;
padding: 50px 36px;
display: flex;
flex-direction: column;
height: 100vh;
`;

export const Button = styled.button`
background: transparent;
width: 342px;
height: 74px;
margin-top: 120px;
gap: 0px;
border-radius: 14px;
opacity: 0px;
border: 1px solid #ffffff;

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
img{
    transform: rotateY(180deg);
}

`
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



