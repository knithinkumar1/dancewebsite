const express = require('express');
const path = require("path"); 
const app=express();
const port=8000;


//video 88:
const bodyparser =require("body-parser");
const mongoose =require('mongoose');
mongoose.connect('mongodb://localhost:27017/dancewebsitedata', {useNewUrlParser: true});
//schema
var contactSchema = new mongoose.Schema({
    name: String,
    phone: String,
    email: String,
    address: String,
    desc: String
  });
//creating model
var  Contact= mongoose.model('Contact', contactSchema);
// ....................video88..........
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


// video 88:
app.post('/contact',(req,res)=>{
    var mydata =new Contact(req.body);
    mydata.save().then(()=>{
        res.send("this item has been saved to the database")
    }).catch(()=>{
        res.status(400).send("item is not saved to the database")
    });

    // res.status(200).render('contact.pug') 
});
// .....................video88...................
//server
app.listen(port,()=>{
    console.log(`application started succesfully on ${port}`)
});