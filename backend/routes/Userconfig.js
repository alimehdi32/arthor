const express = require('express');
const router = express.Router();
const signUp = require('../user/signup');

router.post('/signup', signUp.signUp);

module.exports = router;