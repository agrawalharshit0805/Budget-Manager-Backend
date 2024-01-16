import dotenv from 'dotenv'
import express from 'express'
import cors from "cors"
import {} from 'dotenv/config'
import { database } from './db/db.js'
import fs from 'fs';

dotenv.config();  //-->next line is same for these two combined

const app = express()     //app is used to call the methods from express
const PORT = process.env.PORT;

//middlewares
app.use(express.json());
app.use(cors());        // here we can put the domain and all the things to be accessed on backend side
 
//routes

fs.readdirSync('./routes').map(async(route) => {
    const routeModule = await import(`./routes/${route}`);
    app.use('/api/v1', routeModule.default);
})

app.get('/',(req,res)=>{
    res.send('Hello World')
})

const server = () =>{
    database()
    app.listen(PORT,()=>{
        console.log('listening to port :', PORT)
    })  
}

server()