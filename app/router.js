import express from 'express';
import userController from "./controllers/userController";

const router = express.Router();

router.get('/', (req, res) => res.send("Homepage"));
router.get('/about', (req, res) => res.send("About page"));

router.get('/user', (req, res) => userController.index(req, res));

export default router;
