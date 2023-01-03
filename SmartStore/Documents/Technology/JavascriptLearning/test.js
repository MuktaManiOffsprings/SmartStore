const dal = require('./category-dal');
function action1(req , res){
    dal.add();
    res.send('A1 action of C1 controller is degined in a separate module');
 }

 function action2(req , res){
    res.send('A2 action of C1 controller is degined in a separate module');
 }


 module.exports = {
   a1: action1,
   a2: action2
 };