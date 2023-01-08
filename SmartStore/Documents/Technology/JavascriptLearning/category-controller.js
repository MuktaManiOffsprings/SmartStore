const categoryBl = require('./category-bl');

function add(req, res) {
    console.log(req.body);
    console.log("Hello recieved request");
    categoryBl.add(req.body);
    res.send('to do');
 }


module.exports = {
    add: add
 };