const express = require('express');
const router = express.Router();

let modules = [{name: 'Admin'}, {name : 'Vendor'}, {name : 'Customer'}];

router.get('/list', (req, res) =>{
	res.json(modules);
});

module.exports = router;