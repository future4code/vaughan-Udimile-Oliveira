import { url_BASE } from "../constants/url"
import axios from "axios"
import {useProtect} from "../Hooks/useProtect"

 

export default function AdminHomePage() {
    useProtect()
    

    return (

        <div>
            <p>AdminHomePage</p>
        </div>

    )
}