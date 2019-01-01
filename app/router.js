import express from 'express';
import UserController from "./controllers/UserController";

const router = express.Router();

router.get('/', (req, res) => res.send("Homepage"));
router.get('/about', (req, res) => res.send("About page"));

router.get('/user/create', (req, res) => UserController.create(req, res));

export default router;
