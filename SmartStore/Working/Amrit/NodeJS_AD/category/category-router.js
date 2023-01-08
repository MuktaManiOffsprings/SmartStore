const express = require('express');
const categoryController = require('./category-controller');

const router = express.Router();

router.post('/add', categoryController.add);
router.get('/getList', categoryController.getList);


module.exports = router;