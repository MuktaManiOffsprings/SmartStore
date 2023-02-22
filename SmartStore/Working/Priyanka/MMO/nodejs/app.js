const express = require('express');
const cors = require('cors');

const  categoryRouter = require('./category-router');

const app = express();


app.listen(3000,()=>{
console.log('Server listening on port 3000');
});

app.get('/', (req , res)=>{
   res.send('Hello world');
});

app.use('/category', categoryRouter);






