import useForm from "../../Hooks/useForm"
import useProtect from "../../Hooks/useProtect"
import axios from "axios"
import * as React from 'react';
import TextField from '@mui/material/TextField';
import { ButtonPost, CardContainer, TextFieldPost } from "./styled";
import { urlBase } from "../../constants/urlBase";

export const MakeAPost = () => {
    useProtect()

    const [form, onChange, clear] = useForm({ title: "", body: "" })

    const createPost = (event) => {
        
        event.preventDefault()

        const token = window.localStorage.getItem("token")

        const headers = {
            headers: {
                Authorization: token
            }
        }
        console.log("token", token)
        axios.post(`${urlBase}/posts`, headers, form)
            .then(res => {
                console.log(res.data)
                clear()
            })
            .catch(err => {
                console.log(err.response)
            })
    }
    return (
        <CardContainer>
            <form onSubmit={createPost}>
                <TextFieldPost
                    name="title"
                    label="Título"
                    multiline
                    maxRows={4}
                    value={form.title}
                    onChange={onChange}
                />
                <TextFieldPost
                    name="body"
                    label="Postagem"
                    multiline
                    rows={4}
                    value={form.body}
                    onChange={onChange}
                />
                <ButtonPost type="submit" >Postar</ButtonPost>
            </form>
        </CardContainer>
    )
}