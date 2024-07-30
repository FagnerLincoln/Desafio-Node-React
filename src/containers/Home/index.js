import React, { useState, useRef,} from "react"
import { useNavigate } from 'react-router-dom';

import axios from "axios"
import bruger1 from '../../assents/burger1.svg';

import { H1 } from '../../components/Title/styles';
import Button from '../../components/Button';

import {
    Container,
    Image,
    InputLabel,
    ContainerItens,
    Input,
        } from "./styles";

function App() {
    const [clientes, setClientes] = useState([]);
    const navigate = useNavigate(); 

    const Inputpedido = useRef();
    const Inputnamecliente = useRef();

    async function AddNovoPedido() {

        const {data: newClientes} = await axios.post("http://localhost:3001/clientes/", {
            pedido: Inputpedido.current.value, namecliente:
            Inputnamecliente.current.value
        });
          setClientes([...clientes, newClientes]);
          }

          navigate("/pedidos");

          return (
        <Container>
            <Image alt="logo-imagem" src={bruger1} />

            <ContainerItens>
                <H1>Faça Seu Pedido!</H1>

                <InputLabel>Pedido</InputLabel>
                <Input ref={Inputpedido} placeholder="1Coca-Cola,1-XSalada" />

                <InputLabel>Nome do Cliente</InputLabel>
                <Input ref={Inputnamecliente} placeholder="Steve Jobs" />

                <Button to="/pedidos" onClick={AddNovoPedido}>
                    Novo Pedido
                </Button>
            </ContainerItens>   

        </Container>
    );
}

export default App;