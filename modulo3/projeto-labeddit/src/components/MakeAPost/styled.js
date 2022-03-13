import { Button, TextField } from "@mui/material"
import styled from "styled-components"

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 1% 1%;
    align-items: center ;
    width: 60vh;
`
export const ButtonPost = styled(Button)`
    max-width: 600px;
    display: flex;
    flex-direction:column ;
    width:60vw ;

`
export const TextFieldPost = styled(TextField)`
    display: flex;
    flex-direction: column;
    width: 60vw ;
    margin-bottom: 0.5% ;
`