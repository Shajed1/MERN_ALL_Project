//import all dependency
const express = require('express');
const cors = require('cors');
const router=require('./src/routes/api')
const mongoose = require('mongoose');
const rateLimit = require('express-rate-limit');
const hpp = require('hpp');
const helmet = require('helmet');
const path = require('path');
const app = new express();
const cookieParser = require('cookie-parser');



app.use(cors());
app.use(cookieParser());
//security
app.use(helmet());
app.use(hpp());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb' }));
app.set('etag',false)
let limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 3000
});

app.use(limiter);

//mongodb connection
let URL = "mongodb+srv://shajed1:shajed1@cluster0.onjdyfa.mongodb.net/MyEccomerce?appName=Cluster0";
mongoose.connect(URL)
    .then(()=>{
        console.log("Connected to MongoDB");
    })
    .catch((err)=>{
        console.log(err);
    });
app.use('/api',router);

app.use(express.static('client/dist'));

//


//
app.get("*",function (req,res){
    res.sendFile(path.resolve(__dirname,'client','dist','index.html'));
});

module.exports = app;