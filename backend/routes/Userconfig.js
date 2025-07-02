const express = require('express');
const router = express.Router();
const signUp = require('../user/signup');
const { login } = require('../user/login');

router.post('/signup', signUp.signUp);
router.post('/login', login);

module.exports = router;