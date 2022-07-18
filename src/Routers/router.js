import { Router } from 'express';
import EmailControll  from '../controller/EmailController.js';
const router = Router();

router.post("/SendEmail/create", (req, res) => {
    EmailControll.create(req, res);
})

router.get("/SendEmail/read", (req, res) => {
    
    EmailControll.read(req, res);
})

router.put("/SendEmail/update", (req, res) => {
    EmailControll.update(req, res);
})

router.post("/SendEmail/delete", (req, res) => {
    EmailControll.delete(req, res);
})


export default router;