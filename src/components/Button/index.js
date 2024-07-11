import React from "react";

import {Button as ContainerButton} from './styles'
function Button({childen, ...props}){
    
    return <ContainerButton {...props}>{childen}</ContainerButton>
}

export default Button

