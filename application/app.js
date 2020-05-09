var express = require('express');
var session = require('express-session');
var mysqlStore = require("express-mysql-session")(session);
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
//var loginRouter = require('./routes/login');
//var dbRouter = require('./routes/dbtest');
var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

var sessionStore = new mysqlStore({/* using default options */}, require('./conf/database'));
var sessionOptions = {
    key: "csid",
    secret: "ilikebigbutts1234",
    store: sessionStore,
    cookie: {secure: false, httpOnly: false, maxAge: 900000},
    resave: false,
    saveUninitialized: false
}

app.use(session(sessionOptions));

/*
app.use(session({
    secret: 'ilikebigbutts1234',
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 60 * 1000 * 30
    }
}));*/

app.use('/', indexRouter);
//app.use('/dbtest', dbRouter);
//app.use('/', loginRouter);
app.use('/users', usersRouter);



app.use((err, req, res, next) =>{
    res.status(500);
    res.send('something went wrong')
})
module.exports = app;
