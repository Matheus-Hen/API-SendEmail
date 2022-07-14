import value from "../database/emailMKT.js";
import { SendEmail } from "../index.js";

class EmailControll {
    async create(req, res) {
        const { email } = req.body;
        const mailBody = {
            email
        }
        SendEmail.push(mailBody);
        if (mailBody.email != "" && mailBody.email != null && mailBody.email != undefined) {
            value.setEmail(mailBody.email)
            return res.status(200)
        }
        else return res.status(400).send({ error: "Email não informado" });
    }
}

export default new EmailControll();