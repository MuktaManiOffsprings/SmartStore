const express = require('express');
const cors = require('cors');
//const bodyParser = require('body-parser');

const categoryRouter = require('./category/category-router');

const app = express();

app.use(cors());
//app.use(bodyParser());  
app.use(express.json());

app.listen(3001, () => {
    console.log('Server listening on port 3001');
});

app.get('/', (req, res) => {
    res.send('Hello world');
});

app.use('/category', categoryRouter);
