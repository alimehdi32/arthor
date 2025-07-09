const express = require('express');
const router = express.Router();
const signUp = require('../user/signup');
const { login } = require('../user/login');
const {  checkOrigin } = require('../middleware/CheckOrigin');
const { checkLogin } = require('../middleware/checkLogin');
const { logout } = require('../user/logout');

router.post('/signup', signUp.signUp);
router.post('/login', checkLogin, checkOrigin, login);
router.get('/logout', logout);
router.get('/me', checkLogin, (req, res) => {
    res.status(200).json({
        success: true,
        message: 'User is loggedIn'
    });
})

module.exports = router;