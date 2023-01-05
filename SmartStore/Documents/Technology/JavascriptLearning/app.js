const express = require('express');
const cors = require('cors');

const categoryRouter = require('./category-router');

const app = express();

app.use(cors());

app.listen(3001,()=>{
console.log('Server listening on port 3001');
});

app.get('/', (req , res)=>{
   res.send('Hello world');
});

app.use('/category', categoryRouter);





