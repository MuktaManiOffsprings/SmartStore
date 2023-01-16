const categoryBl = require('./category-bl');

function add(req, res) {
    console.log(req.body);
    categoryBl.add(req.body);
    res.send('to do');
 }


module.exports = {
    add: add
 };