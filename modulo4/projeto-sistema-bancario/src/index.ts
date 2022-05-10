
import express, { Express } from "express";
import cors from 'cors'
import { AddressInfo } from 'net'


const app: Express = express()

app.use(express.json())
app.use(cors())


type extratos = {
    valor: number,
    data: Date,
    descricao: string
}

type conta = {
    name: string,
    cpf: string,
    date: Date,
    saldo: number,
    extrato: Array<extratos>
}

const contas: conta[] = []

app.post ("/users/create", (req, res) => {
    try{
    const {name, cpf, data} = req.body

    const [dia, mes, ano] = data.split("/")

    const dateDate: Date = new Date(`${ano}-${mes}-${dia}`)

    const idadeEmMilissegundos: number = Date.now() - dateDate.getTime()
    
    const idade: number = idadeEmMilissegundos/ 1000 / 60 / 60 / 24 / 365 

    if(idade < 18){
        res.statusCode = 406
        res.status(406).send("Idade deve ser maior que 18 anos.")
    }

    contas.push({
        name,
        cpf,
        date: dateDate,
        saldo: 0,
        extrato: []
    })
   
        res.status(201).send("Conta criada com sucesso!")

    } catch (e) {
        res.send(e)
    }


})

app.get("/user", (req, res) => {
    try{
        if(!contas.length){
            res.statusCode = 404
            throw new Error ("Nenhuma conta encontrada")
        }
        res.status(201).send(contas)
    } catch(e){
        res.send(e)

    }
})



const server = app.listen(process.env.PORT || 3003, () => {
    if(server) {

        const address = server.address() as AddressInfo;
        console.log(`O servidor está funcionando no link: http://localhost:${address.port}/`)
    } else {
        console.error(`Falha em iniciar o servidor!`)
    }
})