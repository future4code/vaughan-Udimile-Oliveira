import { useNavigate } from 'react-router-dom';
import useForm from "../../Hooks/useForm";
import { Button, TextField } from "@mui/material";
import { InputsContainer, StyledSignUp } from "./styled";
import { signUp } from "../../services/access";
import useUnprotected from '../../Hooks/useUnprotected';


export const SignUpPage = ({ setRightButtonText }) => {
    useUnprotected()

    const navigate = useNavigate()
    const [form, onChange, clear] = useForm({ email: "", password: "", username: "" })

    const postSignUp = (event) => {
        event.preventDefault()
        signUp(form, clear, navigate, setRightButtonText)
    }

    return (
        <StyledSignUp>
            <InputsContainer>
                <form onSubmit={postSignUp}>
                    <TextField
                        name='username'
                        label="Nome de usuário"
                        value={form.username}
                        onChange={onChange}
                        variant={"outlined"}
                        fullWidth
                        margin="normal"
                        required
                    />
                    <TextField
                        name='email'
                        label="E-mail"
                        type={'email'}
                        value={form.email}
                        onChange={onChange}
                        variant={"outlined"}
                        fullWidth
                        margin="normal"
                        required
                    />
                    <TextField
                        name='password'
                        label="Senha"
                        type={'password'}
                        value={form.password}
                        onChange={onChange}
                        variant={"outlined"}
                        fullWidth
                        margin="normal"
                        required
                    />

                    <Button
                        type={"submit"}
                        variant="contained"
                        color={"primary"}
                        fullWidth >
                        Cadastrar
                    </Button>
                </form>
            </InputsContainer>
        </StyledSignUp>
    )
}