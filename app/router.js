const express = require('express');
const userController = require('./controllers/userController');

const router = express.Router();

router.get('/', (req, res) => res.send("Homepage"));
router.get('/about', (req, res) => res.send("About page"));

router.get('/user', (req, res) => userController.index(req, res));

module.exports = router;
