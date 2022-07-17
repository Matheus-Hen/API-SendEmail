import connect from './connect.js';
import dotenv from 'dotenv';

dotenv.config({ path: './.env' });
const coluna1 = process.env.coluna1;
const tabela = process.env.tabela;
const conectado = connect();

export default function setEmail(newEmail, res, req) {
    conectado.query(`INSERT INTO ${tabela}(${coluna1}) VALUES (?)`, [newEmail], function (err, result, fields, message) {
        if (err) {
            console.log(err.sqlMessage);
            res.status(400).send({ message: 'Email já existe' });
        }
        else {
            res.status(200).send({ message: 'Email inserido com sucesso' });
            console.log('1 registro inserido');;
        }
        
    })
}
