const express = require('express');
const thanhvienController = require('./back/controllers/thanhvienController.js');
const router = express.Router();

router.post('/login', thanhvienController.login);
router.post('/register', thanhvienController.register);

module.exports = router;