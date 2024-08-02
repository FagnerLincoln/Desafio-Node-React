import React, { useState, useEffect } from "react";
import axios from "axios";

import burger2 from '../../assents/burger2.svg';
import lixeira from '../../assents/lixeira.svg';
import H1 from '../../components/Title';
import Button from '../../components/Button';

import {
    Container,
    Image,
    ContainerItens,
    User
} from "./styles";

function Pedidos() {
    const [clientes, setClientes] = useState([]);

    useEffect(() => {
        async function fetchClientes() {
            try {
                const { data: newClientes } = await axios.get("http://localhost:3001/orders");
                setClientes(newClientes);
            } catch (error) {
                console.error("Erro ao buscar pedidos:", error);
            }
        }
        fetchClientes();
    }, []);

    async function deleteOrder(orderId) {
        try {
            await axios.delete(`http://localhost:3001/orders/${orderId}`);
            const newOrders = clientes.filter((order) => order.id !== orderId);
            setClientes(newOrders);
        } catch (error) {
            console.error("Erro ao deletar pedido:", error);
        }
    }

    return (
        <Container>
            <Image alt="logo-imagem" src={burger2} />
            <ContainerItens>
                <H1>Pedidos!</H1>
                <ul>
                    {clientes.map((order) => (
                        <User key={order.id}>
                            <b>
                            <p>{order.pedido}</p> - <p>{order.name}</p>
                            </b>
                            
                            <button onClick={() => deleteOrder(order.id)}>
                                <img src={lixeira} alt="lata-de-lixo" />
                            </button>
                        </User>
                    ))}
                </ul>
                <Button to="/">
                    Voltar
                </Button>
            </ContainerItens>
        </Container>
    );
}

export default Pedidos;