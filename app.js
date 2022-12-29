const express= require('express');
const res = require('express/lib/response');
const tst = require('./test');
const app=express();


app.get('/',(req,res)=>{
    res.send('Main Page')

})
app.get('/about',(req,res)=>{
    res.send('About Page')

})
app.get('/contactus',(req,res)=>{
    res.send('Contactus page')
})
app.put('/about',(req,rea)=>{
    res.send('About page is update');
})
const test=require('./test');
const port=3000;
app.listen(port,()=>{
    console.log(`Server is runing on port ${port}`)
})