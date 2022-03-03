import Button from '@mui/material/Button'
import { goToSignUp } from "../../Router/coordinator";
import { ButtonSignUpContainer, InputsContainer, StyledLogin } from "./styled";
import { TextField } from "@mui/material";
import useForm from "../../Hooks/useForm";
import { login } from '../../services/access';
import { useNavigate } from 'react-router-dom';
import useUnprotected from '../../Hooks/useUnprotected';


export const LoginPage = ({setRightButtonText}) => {
    useUnprotected()
    
    const navigate = useNavigate()
    const [form, onChange, clear] = useForm({ email: "", password: "" })

    const onSubmitForm = (event) => {
        event.preventDefault()
        login(form, clear, navigate, setRightButtonText)
    }

    return (
        <StyledLogin>
            <InputsContainer>
                <form onSubmit={onSubmitForm}>
                    <TextField
                        name="email"
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
                        name="password"
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
                        Fazer login
                    </Button>
                </form>
            </InputsContainer>

            <ButtonSignUpContainer>
                <Button
                    variant="text"
                    onClick={() => goToSignUp(navigate)}
                    fullWidth
                >
                   Não Possui conta? Cadastrar-se
                </Button>
            </ButtonSignUpContainer>

        </StyledLogin>
    )
}