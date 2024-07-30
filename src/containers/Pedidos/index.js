import React, { useState, useEffect } from "react"
import axios from "axios"

import burger2 from '../../assents/burger2.svg';
import lixeira from '../../assents/lixeira.svg';
import H1 from '../../components/Title'
import Button from '../../components/Button'

import {
    Container,
    Image,
    ContainerItens,
    User
} from "./styles";

function Pedidos() {
    const [clientes, setClientes] = useState([]);

    //OBS =
    // useEffect (Efeito colateral)=>Toda vez que a pagina carrega "useEffect é Chamado)"
    // Quando o estado está no Array de dependencia do useEffect é alterado.

    useEffect(() => {
        async function fetClientes() {
            const { data: newClientes } = await axios.get("http://localhost:3001/clientes")

            setClientes(newClientes)
        }
        fetClientes()
    }, [])

    async function deleteUser(userId) {
        await axios.delete(`http://localhost:3001/clientes/${userId}`)
        const newclientes = clientes.filter((user) => user.id !== userId);

        setClientes(newclientes)
    }

    return (
        <Container>
            <Image alt="logo-imagem" src={burger2} />
            <ContainerItens>
                <H1>Pedidos!</H1>
                <ul>
                    {clientes.map((user) => (
                        <User key={user.id}> <b>
                            <p>{user.pedido}</p> - <p>{user.namecliente}</p>
                        </b>
                            <button onClick={() => deleteUser(user.id)}>
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