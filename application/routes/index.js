
var express = require('express');
var router = express.Router();
var path = require("path");

var user;
/* GET home page. */
router.get('/', function(req, res, next) {
  /*
  user = req.session.username;
  if(user)
  {
    console.log("Logged In");
  }
  else
  {
    console.log("Logged Out")
  }*/

  res.sendFile('index.html', {root:'public/html'});
});

router.get('/login', function(req, res, next) {
  
  res.sendFile('login.html', {root:'public/html'});
});

router.get('/registration', function(req, res, next) {
  
  res.sendFile('registration.html', {root:'public/html'});
});

router.get('/postimage', function(req, res, next) {
  
  res.sendFile('postimage.html', {root:'public/html'});
});

router.get('/viewimage', function(req, res, next) {
  
  res.sendFile('viewimage.html', {root:'public/html'});
});



module.exports = router;
