import styled from "styled-components"

export const CharacterCard = styled.div`
    border: 1px solid black;
    width: 30%;
    margin: 10px;
    padding: 5px ;
    display: flex;
    justify-content: center;

    &:hover {
        cursor: pointer;
        background-color: #F8DC01;
    }
`

export const CardAll = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

`
