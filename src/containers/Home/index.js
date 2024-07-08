import React, { useState, useRef,} from "react";

import axios from "axios";

import People from "../../assents/people.svg"
import Arrow from "../../assents/arrow.svg"


import {
    Container,
    Image,
    H1,
    ContainerItens,
    ImputLabel,
    Input,
    Button,
} from "./styles"
import { wait } from "@testing-library/user-event/dist/utils";
// Saber cosumir api utilizando AXIOS
// O Poder do "JSX" 
function App() {

    const [users, setUsers] = useState([]);
    const inputName = useRef()
    const inputAge = useRef()

    //Spreed Operaitor"..." : Organiza esparrama dentro de um Array. Ex: abaixo "tres pontos"

    async function addnewUser() {

        const { data: newUser } = await axios.post("http://localhost:3001/users", {
            name: inputName.current.value,
            age: inputAge.current.value,
        });

        setUsers([...users, newUser]);

    }

  
    // REACT HOOK => useEffect (Efeito Colateral)
    // A minha aplicação inicia (A pagina carregou, useEffect é chamado)
    // Quando um estado que esta no Array de dependencia do useEffect é alterado

       return (
        <Container>
            <Image alt="logo-image" src={People} />
            <ContainerItens>
                <H1>Olá!</H1>

                <ImputLabel>Nome</ImputLabel>
                <Input ref={inputName} placeholder="Nome" />

                <ImputLabel>Idade</ImputLabel>
                <Input ref={inputAge} placeholder="Idade" />

                <Button onClick={addnewUser}>
                    Cadastrar <img alt="seta" src={Arrow} />
                </Button>

            </ContainerItens>

        </Container>
    )
}
export default App 