const express = require('express');
const router = express.Router();

const userController = require('../controllers/user');

router.post('/searchedUser', userController.postSearchedUser);

module.exports = router;