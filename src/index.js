import express from 'express'
import router from './routers/router.js'
import cors from "cors";
import EmailController from './controller/EmailController.js';
import connect from './database/connect.js';

var corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200
}
const app = express();
app.use(cors(corsOptions));

app.use(express.json())
app.use(router)

app.listen(3000, () => {
    console.log("Servidor iniciado");
})

