const categoryDal = require('./category-dal');

async function add(category) {
    await categoryDal.add(category);
}

async function getList() {
    let data = await categoryDal.getList();
    
    return data;
}

module.exports = {
    add: add,
    getList: getList
};