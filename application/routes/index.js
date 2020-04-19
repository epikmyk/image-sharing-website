
var express = require('express');
var router = express.Router();

var user;
/* GET home page. */
router.get('/index', function(req, res, next) {
  
  user = req.session.username;
  if(user)
  {
    console.log("Logged In");
  }
  else
  {
    console.log("Logged Out")
  }

  res.sendFile('index.html', {root:'public/'});
});


module.exports = router;
