import React, { useState, useRef } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import burger1 from '../../assents/burger1.svg';

import { H1 } from '../../components/Title/styles';
import Button from '../../components/Button';

import {
    Container,
    Image,
    InputLabel,
    ContainerItens,
    Input,
} from "./styles";

function Home() {
    const [clientes, setClientes] = useState([]);
    const navigate = useNavigate();

    const Inputpedido = useRef();
    const Inputnamecliente = useRef();

    async function AddNovoPedido() {
        try {
            const { data: newOrder } = await axios.post("http://localhost:3001/orders", {
                name: Inputnamecliente.current.value,
                pedido: Inputpedido.current.value
            });
            
            console.log(newOrder)
            
            setClientes([...clientes, newOrder]);
            navigate("/pedidos");
        } catch (error) {
            console.error("Erro ao adicionar pedido:", error);
        }
    }

    return (
        <Container>
            <Image alt="logo-imagem" src={burger1} />

            <ContainerItens>
                <H1>Faça Seu Pedido!</H1>

                <InputLabel>Pedido</InputLabel>
                <Input ref={Inputpedido} placeholder="1 Coca-Cola, 1 X-Salada" />

                <InputLabel>Nome do Cliente</InputLabel>
                <Input ref={Inputnamecliente} placeholder="Steve Jobs" />

                <Button onClick={AddNovoPedido}>
                    Novo Pedido
                </Button>
            </ContainerItens>
        </Container>
    );
}

export default Home;