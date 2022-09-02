const {admin} = require('../controllers/adminController');
const express = require('express');
const router = express.Router();

const adminsUsers = require('../middlewares/adminsUsers')

router.get('/', adminsUsers, admin);

module.exports = router;