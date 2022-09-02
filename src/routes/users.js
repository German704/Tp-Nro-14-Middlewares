const {login, register, userCreate} = require('../controllers/usersController');
const express = require('express');
const router = express.Router();

router.get('/login', login);
// router.get('/login', loginProcess)

router.get('/register', register);
router.post('/register', userCreate)

module.exports = router;