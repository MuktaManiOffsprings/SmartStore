const express = require('express');
const x = require('./test-router');

const app = express();


app.listen(3000,()=>{
console.log('Server listening on port 3000');
});

app.get('/', (req , res)=>{
   res.send('Hello world');
});

app.use('/C1', x);







/*
const http = require('http');
const hostname='127.0.0.1';
const port= 3000;
const server= http.createServer((req, res)=>{
    res.statusCode=200;
    res.setHeader('Content-Type','text/plain');
    if(req.url === '/X'){
        res.end('Hello World X');
    }
    else if(req.url === '/Y'){
        res.end('Hello World Y');
    }
    else if(req.url === '/'){
        res.end('Hello World');
    } 
    else{
        res.end('unknown request');
    }
    
    
});

server.listen(port,hostname,()=>{
    console.log(`Server running at http://${hostname}:${port}/`)
});
*/



/*const http = require('http');
const hostname='127.0.0.1';
const port= 3000;
const server= http.createServer((req, res)=>{
    res.statusCode=200;
    res.setHeader('Content-Type','text/plain');
    res.end('Hello World ');
});
server.listen(port,hostname,()=>{
    console.log(`Server running at http://${hostname}:${port}/`)
});
const port1= 4200;
const server1= http.createServer((req, res)=>{
    res.statusCode=200;
    res.setHeader('Content-Type','text/plain');
    res.end('Hello World X');
});
server1.listen(port1,hostname1,()=>{
    console.log(`Server running at http://${hostname}:${port1}/`)
});
const port2= 5000;
const server2= http.createServer((req, res)=>{
    res.statusCode=200;
    res.setHeader('Content-Type','text/plain');
    res.end('Hello World Y');
});
server2.listen(port2,hostname2,()=>{
    console.log(`Server running at http://${hostname}:${port2}/`)
});*/
