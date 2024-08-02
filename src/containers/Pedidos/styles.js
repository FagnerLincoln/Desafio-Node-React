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
width: 414px;
height: 896px;
padding: 50px 36px;
display: flex;
flex-direction: column;
height: 100vh;
`;

export const User = styled.li

    `
box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
width: 342px;
height: 100px;
border-radius: 14px;
justify-content: space-around;
display: flex;
align-items: center;
border: none;
outline: none;
background: rgba(255, 255, 255, 0.25);
font-size: 18px;
font-weight: 300;
line-height: 21.09px;
text-align: left;
margin-top: 20px;

p{

color: #ffffff;
font-size: 18px;
font-weight: 300;
line-height: 21.09px;
text-align: left;

}

button
{
    background: none;
    border: none;
    cursor: pointer;
    
}

`           
