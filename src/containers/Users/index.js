import React, { useState, useEffect } from "react";

import axios from "axios";

import Avatar from "../../assents/avatar.svg"
import Arrow from "../../assents/arrow.svg"
import Trash from "../../assents/trash.svg"

import {
    Container,
    Image,
    H1,
    ContainerItens,
    Button,
    User,
} from "./styles"
// Saber cosumir api utilizando AXIOS
// O Poder do "JSX" 
function Users() {

    const [users, setUsers] = useState([]);

    //Spreed Operaitor"..." : Organiza esparrama dentro de um Array. Ex: abaixo "tres pontos"

    useEffect(() => {

        async function fetchUsers() {

            const { data: newUsers } = await axios.get("http://localhost:3001/users")
            setUsers(newUsers);

        }
        fetchUsers()
    }, [])

    // REACT HOOK => useEffect (Efeito Colateral)
    // A minha aplicação inicia (A pagina carregou, useEffect é chamado)
    // Quando um estado que esta no Array de dependencia do useEffect é alterado

    async function deleteUser(userId) {
        await axios.delete(`http://localhost:3001/users/${userId}`)
        const newUsers = users.filter((user) => user.id !== userId);
        setUsers(newUsers);
    }
    return (
        <Container>
            <Image alt="logo-image" src={Avatar} />
            <ContainerItens>
                <H1>Usuários</H1>

                <ul>
                    {users.map((user) => (
                        <User key={user.id}>
                            <p>{user.name}</p> <p>{user.age}</p>
                            <button onClick={() => deleteUser(user.id)}>
                                <img src={Trash} alt="lata-de-lixo" />
                            </button>
                        </User>
                    ))}
                </ul>

                <Button>
                    <img alt="seta" src={Arrow} /> Voltar
                </Button>

            </ContainerItens>

        </Container>
    )
}
export default Users 