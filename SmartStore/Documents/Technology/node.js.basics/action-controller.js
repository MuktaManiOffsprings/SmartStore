const express = require('express');
const router = express.Router();

let actions = [
		{
			module: 'Admin', 
			actions : [
				{name: 'register'},
				{name: 'manage'},
				{name: 'view'}
			]
		},
		{
			module: 'Vendor', 
			actions : [
				{name: 'register'},
				{name: 'view'},
				{name: 'add'},
				{name: 'update'},
				{name: 'delte'}
			]
		},
		{
			module: 'Customer', 
			actions : [
				{name: 'register'},
				{name: 'manage'},
				{name: 'read'}
			]
		}		
	];
	
router.get('/list/:module', (req, res) =>{
	let result = actions.filter((a) =>{
		return a.module == req.params.module;
	});
	
	res.json(result[0].actions);
});

module.exports = router;