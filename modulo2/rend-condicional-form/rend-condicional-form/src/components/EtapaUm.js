import React from "react";

class EtapaUm extends React.Component {
    
    render() {
        return (
            <div>
                <h1>ETAPA 1 - DADOS GERAIS</h1>
                <p>1. Qual o seu nome?</p>
                <input></input>
                <p>2. Qual sua idade?</p>
                <input></input>
                <p>3. Qual seu email?</p>
                <input></input>
                <p>4. Qual sua escolaridade?</p>
                <select>
                    <option></option>
                    <option value="ensino-medio-incompleto">Ensino Médio Incompleto</option>
                    <option value="ensino-medio-completo">Ensino Médio Completo</option>
                    <option value="ensino-superior-incompleto">Ensino Superior Incompleto</option>
                    <option value="ensino-superior-completo">Ensino Superior Completo</option>
                </select>
            </div>
        )
    }
}

export default EtapaUm