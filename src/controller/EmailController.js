import setEmail from "../database/setEmail.js";


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
}

export default new EmailControll();