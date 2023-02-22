function add(req, res) {
    console.log(req.body);
    res.send('to do');
 }


module.exports = {
    add: add
 };