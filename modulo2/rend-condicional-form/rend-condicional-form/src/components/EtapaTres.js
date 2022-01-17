import React from "react";


export default class EtapaTres extends React.Component {
    render() {
        return (
            <div>
                <h1>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h1>
                <p>1. Por que você não terminou um curso de graduação?</p>
                <input></input>
                <p>2. Você fez algum curso complementar?</p>
                <select>
                    <option></option>
                    <option value="curso-tecnico">Curso técnico</option>
                    <option value="cursos-de-ingles">Cursos de inglês</option>
                    <option value="nao-fez">Não fiz curso complementar</option>
                </select>
            </div>

        )
    }
}