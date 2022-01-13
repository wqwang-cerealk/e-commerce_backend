
const express = require('express');


const app = express();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", req.headers.origin || "*"); //list here react node server`s IP address
    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods",
        "GET,POST,PUT,DELETE,OPTIONS");
    res.header("Access-Control-Allow-Credentials", "true");
    next();
});

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const session = require('express-session')
app.use(session({
    secret: 'keyboard cat',
    cookie: {},
    resave: true,
    saveUninitialized: true
}));

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/final');

require('./login/service')(app);
require('./products/products-service')(app);
app.listen(process.env.PORT || 4000);
