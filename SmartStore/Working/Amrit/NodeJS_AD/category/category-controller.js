const categoryBl = require('./category-bl');

async function add(req, res) {
    await categoryBl.add(req.body)
    let data = await categoryBl.getList();
    res.send(data);
}

async function getList(req, res) {
    let data = await categoryBl.getList();
    console.log('Logging in Controller');
    console.log(data);
    res.send(data);
}

module.exports = {
    add: add,
    getList: getList
 };