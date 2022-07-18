import connect from './connect.js';
import dotenv from 'dotenv';

dotenv.config({ path: './.env' });
const coluna1 = process.env.coluna1;
const tabela = process.env.tabela;
const conectado = connect();

export function setEmail(newEmail, res, req) {
    conectado.query(`INSERT INTO ${tabela}(${coluna1}) VALUES (?)`, [newEmail], function (err, result) {
        if (result.affectedRows <= 0) {
            res.status(400).send({ message: 'Email já existe' });
        }
        else {
            res.status(200).send({ message: 'Email inserido com sucesso' });
            console.log('1 registro inserido');;
        }
    })
}

export function getEmail(res, req) {
    conectado.query(`SELECT * FROM ${tabela} ORDER BY ${coluna1}`, function (err, result) {
        if (result.affectedRows <= 0) {
            res.status(400).send({ message: 'Email não encontrado' });
        }
        else {
            res.status(200).send(result);
            console.log('registros encontrados');
        }
    })
}

export function updateEmail(email,newEmail, res, req) {
    conectado.query(`UPDATE ${tabela} SET ${coluna1} = ? WHERE ${coluna1} = ?`, [newEmail,email], function (err, result) {
        if (result.affectedRows <= 0) {
            res.status(400).send({ message: 'Email não encontrado' });
        }
        else {
            res.status(200).send({ message: 'Email atualizado com sucesso' });
            console.log('registro atualizado');
        }
    })
}

export function deleteEmail(email, res, req) {
    conectado.query(`DELETE FROM ${tabela} WHERE ${coluna1} = ?`, [email], function (err, result) {
        console.log();
        if (result.affectedRows <= 0) {
            res.status(400).send({ message: 'Email não encontrado' });
        }
        else {
            res.status(200).send({ message: 'Email deletado com sucesso' });
            console.log('registro deletado');
        }
    })
}