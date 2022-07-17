import { Router } from 'express';
import EmailControll  from '../controller/EmailController.js';
const router = Router();

router.post("/SendEmail", (req, res) => {
    EmailControll.create(req, res);
})


export default router;