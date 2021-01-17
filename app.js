const express = require('express');
const path = require("path"); 
const app=express();
const port=8000;

//express stuff
app.use('/static' , express.static('static'));
app.use(express.urlencoded());

//pug stuff
app.set('view engine', 'pug')
app.set('views',path.join(__dirname,"views"));

//endpoints
app.get('/',(req,res)=>{
    const paras={ };
    // res.status(200).render('index.pug',paras)
    res.status(200).render('home.pug',paras) //for template inheritance
});

//for template inheritance
app.get('/contact',(req,res)=>{
    const paras={ };
    res.status(200).render('contact.pug',paras) 
});
//.....................template inheritance.....
//server
app.listen(port,()=>{
    console.log(`application started succesfully on ${port}`)
});