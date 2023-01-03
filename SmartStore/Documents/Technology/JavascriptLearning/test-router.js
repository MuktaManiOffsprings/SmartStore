const express = require('express');
const test = require('./test');

const router = express.Router();

router.get('/A1', test.a1);
router.get('/K1' , test.a2);

module.exports = router;