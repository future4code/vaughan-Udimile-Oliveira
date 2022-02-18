import { useState } from "react"

export default function CreateTripPage() {
    const [name, setName] = useState("")
    const [planet, setPlanet] = useState("")
    const [date, setDate] = useState("")
    const [] = useState("")
    const [] = useState("")



    return (
        <div>
            <form>
                <input
                    placeholder="Nome"
                />
                <input
                    placeholder="Planeta"
                />
                <input
                    placeholder="Data"
                    type="date"
                />
                <input
                    placeholder="Descrição"
                />
                <input
                    placeholder="Duração em dias"
                />
            </form>
        </div>
    )

}
