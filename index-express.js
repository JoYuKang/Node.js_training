const express = require('express');

const app =express();
const port = 3000;

app.get('/',(req,res)=>{
    res.send('hello express')
});
app.get('/main',(req,res)=>{
    res.send('main express')
});

app.listen(port, ()=>{
    console.log('express listening on port',port);
});