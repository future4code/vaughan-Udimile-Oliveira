import express from 'express'
import cors from 'cors'
import { AddressInfo } from "net"
import { users } from './users'

const app = express()

app.use(express.json())
app.use(cors())

//1. a) GET / b) A entidade é users

app.get("/users", (req, res) => {
    
        const allUsers = users
      
        res.status(200).send(allUsers);
   
})

//2. a) path params b) enum

app.get("/users/:type", (req, res) => {

    const typeUser = req.params.type
    
    const usersType = users.filter(user => {
        return user.type === typeUser
    })
  
    res.status(200).send(usersType);

})

//3. 

app.get("/users/?name=name", (req, res) => {

    const nameUser = req.query.name
    
    const usersName = users.filter(user => {
        return user.name === nameUser
    })
  
    res.status(200).send(usersName);

})



const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost:${address.port}`);
    } else {
        console.error(`Failure upon starting server.`);
    }
});