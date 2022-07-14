import express from 'express'
import { Router } from 'express';
import cors from "cors";
import bodyParser from 'body-parser';
import EmailController from './controller/EmailController.js';

const router = Router();
var corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200
}
const app = express();
app.use(cors(corsOptions));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
router.post("/SendEmail", (req, res) => {
    res.json(req.body)
    if(req.body.email != null && req.body.email != "")EmailController.create(req, res);
})
app.use(router)


export const SendEmail = []

app.listen(3004, () => {
    console.log("Servidor iniciado");
})

