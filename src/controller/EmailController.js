import { setEmail, getEmail, updateEmail, deleteEmail } from "../database/SendEmail.js";


class EmailControll {

    async create(req, res) {
        try {
            const email = req.body.email;
            setEmail(email, res, req);
        }
        catch (err) {
            return res.status(400).send({ error: "Email não inserido" });
        }
    }
    async read(req, res) {
        try {
            getEmail(res, req);
        }
        catch (err) {
            return res.status(400).send({ error: "Email não inserido" });
        }
    }
    async update(req, res) {
        try {
            const emailAtual = req.body.emailAtual;
            const emailNovo = req.body.emailNovo;
            updateEmail(emailAtual, emailNovo, res, req);
        }
        catch (err) {
            return res.status(400).send({ error: "Email não inserido" });
        }
    }
    async delete(req, res) {
        try {
            const email = req.body.email;
            console.log(req.body);
            deleteEmail(email, res, req)
        }
        catch (error) {
            return res.status(400).send({ error: "Email não deletado" })
        }
    }
}

export default new EmailControll();