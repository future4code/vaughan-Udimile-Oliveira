import express from 'express';
import cors from 'cors';



const app = express();

app.use(express.json());
app.use(cors());

type Person = [{
    id: number,
    name: string,
    phone: number,
    email: string,
    website: string
}, {
    id: number,
    name: string,
    phone: number,
    email: string,
    website: string
}, {
    id: number,
    name: string,
    phone: number,
    email: string,
    website: string
}]

const users: Person = [
    {
        id: 1,
        name: "Udimile",
        phone: 71982960130,
        email: "Udimile@gmail.com",
        website: ""
    },
    {
        id: 2,
        name: "Udimile",
        phone: 71982960130,
        email: "Udimile@gmail.com",
        website: ""
    },
    {
        id: 3,
        name: "Udimile",
        phone: 71982960130,
        email: "Udimile@gmail.com",
        website: ""
    }

]

