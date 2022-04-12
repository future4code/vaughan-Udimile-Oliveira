import express, {Request, Response} from 'express';
import cors from 'cors';
import { AddressInfo } from "net";
import connection from "./connection"


const app = express();

app.use(express.json());
app.use(cors());




const server = app.listen(3003, () => {
    if(server){
        const address = server.address() as AddressInfo;
        console.log(`Server is running in https://localhost:${address.port}`);
    }else{
        console.error(`Server is not running in https://localhost`)
    }
});