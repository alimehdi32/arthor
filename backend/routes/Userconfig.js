const express = require('express');
const router = express.Router();
const signUp = require('../user/signup');
const { login } = require('../user/login');
const {  checkOrigin } = require('../middleware/CheckOrigin');
const { checkLogin } = require('../middleware/checkLogin');
const { logout } = require('../user/logout');
const { auth } = require('../middleware/auth');

router.post('/signup', checkOrigin, signUp.signUp);
router.post('/login', checkOrigin, login);
router.get('/logout', logout);
router.get('/me', checkLogin, (req, res) => {
    res.status(200).json({
        success: true,
        message: 'User is loggedIn'
    });
})
router.get('/get-user', checkLogin, auth, (req, res) => {
    res.json({
        status: 200,
        success: true,
        user: req.user, // user info is attached to the request object by auth middleware
    })
})

module.exports = router;