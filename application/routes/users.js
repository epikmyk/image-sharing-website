/*var express = require('express');
var router = express.Router();

/* GET users listing. */
/*
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;*/

const express = require('express');
const router = express.Router();
const db = require('../conf/database');


router.get('/getAllUsers', (req, res, next) => {
    db.query('SELECT * from users;', (err, results, fields) => {
        if(err){
            next(err);
        }
        console.log(results);
        res.send(results);
    })
});

router.get('/getAllPosts', (req, res, next) => {
    db.query('SELECT * from posts;', (err, results, fields) => {
        if(err){
            next(err);
        }
        console.log(results);
        res.send(results);
    })
});


router.post('/createUser', (req, res, next) => {
    let username = req.body.uname;
    let email = req.body.email;
    let password = req.body.password;

    //validate data

    let baseSQL = 'INSERT INTO users (username, email, password, created) Values (?, ?, ?, now())';
    db.query(baseSQL, [username, email, password])
        .then(([results, fields]) => {
            if(results && results.affectedRows){
                 
                res.redirect('/index')
            }else
            {
                res.send('user was not made')
            }
        })
        .catch((err) => {
            next(err);
        })
})

router.post('/login', (req, res, next) => {
    let username = req.body.uname;
    let password = req.body.password;
    
    //validate data

    let baseSQL = 'SELECT * FROM users WHERE username = ? AND password = ?';
    db.query(baseSQL, [username, password])
    .then(([results, fields]) => {
        if(results.length > 0){
            req.session.username = username;
            req.session.opp = 1;
            //req.session.opp = 1;
            console.log(username + " Logged In");
            
            res.redirect('/index')
        }else
        {
            res.redirect('back')
        }
    })
    .catch((err) => {
        next(err);
    })
})


router.get('/logout', (req, res, next) => {
  if(req.session.username)
  {
    req.session.destroy();
    console.log("Logged out");
  }
    
    res.redirect('/');  
})




module.exports = router;

