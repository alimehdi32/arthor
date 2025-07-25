const express = require('express');
const router = express.Router();
const { InitialiseStock } = require('../user/InitialiseStock');
const { updateStocks } = require('../user/InitialiseStock');
const { auth } = require('../middleware/auth');

router.get('/initialise-stock', auth, InitialiseStock);
router.put('/update-stocks', auth, updateStocks);


module.exports = router;