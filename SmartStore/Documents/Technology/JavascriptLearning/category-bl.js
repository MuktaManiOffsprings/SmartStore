const categoryDal = require('./category-dal');

function add(category){
   console.log('Add method in bl');
   categoryDal.add(category);
}

module.exports = {
    add: add
};