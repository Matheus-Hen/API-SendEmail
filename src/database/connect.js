import dotenv from 'dotenv';
import mysql from 'mysql';

//protecting the .env file
dotenv.config({ path: './.env' });
const root = process.env.user;
const password = process.env.password;
const database = process.env.database;
const host = process.env.host;
const port = process.env.port;




export default function connect(){
    const connection = mysql.createConnection({
        host: host,
        user: root,
        password: password,
        database: database,
        port: port
    })
    
    connection.connect(function (err) {
        if (err) throw err;
        console.log('Conexão com o banco de dados estabelecida com sucesso!');
    });
    return connection;
}