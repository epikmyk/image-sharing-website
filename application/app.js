var express = require('express');
var session = require('express-session');
var mysqlStore = require("express-mysql-session")(session);
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var postsRouter = require('./routes/posts');
//var loginRouter = require('./routes/login');
//var dbRouter = require('./routes/dbtest');
var app = express();

app.use(logger('dev'));
app.use(express.json());
//app.use(bodyParser.urlencoded({ extended: true}));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
//app.use(express.static(path.join(__dirname, 'public')));

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
app.use("/public", express.static(path.join(__dirname, "public")));
//app.use(express.static(path.join(__dirname, 'public')));
app.use("images", express.static(path.join(__dirname, "public/images")));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/posts', postsRouter);



app.use((err, req, res, next) =>{
    res.status(500);
    res.send('something went wrong')
})
module.exports = app;
