const express = require('express');
const moduleRouter = require('./module-controller')
const actionRouter = require('./action-controller')

const app = express();
app.use('/module', moduleRouter);
app.use('/action', actionRouter);


app.get('/', (req, res) =>{
	res.send('Hello World!');	
});

app.get('/x', (req, res) =>{
	res.send('Hello World X!');	
});

app.get('/y', (req, res) =>{
	res.send('Hello World Y!');	
});

app.listen(3000, () =>{
	console.log('Server started and listening on port 3000');
});