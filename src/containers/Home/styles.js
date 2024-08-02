import styled from 'styled-components';
import background2 from '../../assents/Background2.svg';


export const Container = styled.div`
background: url("${background2}");
background-size: cover;

display: flex;
flex-direction: column;
align-items: none;
gap: 5px;
align-items: center;

`;

export const Image = styled.img`
margin-top: 30px;
`;

export const ContainerItens = styled.div`
background: linear-gradient(
157.44deg,
rgba(255,255,255) 0,85%
rgba(255,255,255) 0,85%
rgba(255,255,255) 100%  
);

border-radius: 61px, 61px 0px, 0px;
padding: 50px 36px;

display: flex;
flex-direction: column;
height: 100%;
`

export const InputLabel = styled.p`
font-size: 18px;
font-weight: 700;
line-height: 22px;
letter-spacing: -0.40799999237060547px;
text-align: left;
margin: 25px;
color: #ffffff;
margin-bottom: 5px;
`;

export const Input = styled.input`
box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
width: 342px;
height: 58px;
padding: 5px 5px 5px 5px;
padding-left: 20px;
border-radius: 14px;
opacity: 0px;

border: none;
outline: none;
color: black;
font-style: normal;
font-size: 22px;
font-weight: 800;
line-height: 21.09px;
text-align: left;

`;



