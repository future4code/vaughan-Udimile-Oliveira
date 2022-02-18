import { url_BASE } from "../constants/url"
import { usePostData } from "../Hooks/usePostData"

export default function AppFormPage() {
    const [name, setName] = ("")
    const [planet, setPlanet] = ("")
    const [date, setDate] = ("")
    const [applicationText, setApplicationText] = ("")
    const [profession, setProfession] = ("")
    const [country, setCountry] = ("")

    const body = {
        "name": name,
        "planet": planet,
        "date": date,
        "applicationText": applicationText,
        "profession": profession,
        "country": country
    }

    const headers = {
        auth: "token"
    }

    const [create, isLoadingCreate, errorCreate] = usePostData(`${url_BASE}trips`, body, headers)
    return (

        <div>
            <p>AppFormPage</p>
        </div>

    )
}