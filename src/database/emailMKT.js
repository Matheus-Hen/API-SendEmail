import mysql from 'mysql';
import dotenv from 'dotenv';


dotenv.config({ path: './.env' });
const root = process.env.user;
const password = process.env.password;
const database = process.env.database;
const host = process.env.host;
const port = process.env.port;

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


class value {
    constructor(email) {
        this.email = email;
    }

    get Email() {
        console.log(this.email)
        return this.email;
    }
    setEmail(newEmail) {
        this.email = newEmail;
        if (this.email != "" && this.email != null && this.email != "null" && this.email != undefined) {
            connection.query('INSERT INTO emailmarkt(EmailMarktUser) VALUES (?)', [this.email], function (err, result) {
                if (err) {
                    console.log(err.sqlMessage);
                    throw err;
                }
                console.log('1 registro inserido');
            })
            connection.end()
        }
    }
}

export default new value();