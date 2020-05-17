
const express = require('express');
const router = express.Router();
const UserContoller = require('../controller/users');

router.get('/getAllUsers', (req, res, next) => {
    db.query('SELECT * from users;', (err, results, fields) => {
        if (err) {
            next(err);
        }
        console.log(results);
        res.send(results);
    })
});

router.get('/getAllPosts', (req, res, next) => {
    db.query('SELECT * from posts;', (err, results, fields) => {
        if (err) {
            next(err);
        }
        console.log(results);
        res.send(results);
    })
});


router.post('/register', (req, res, next) => {
    UserContoller.createUser(req, res, next);
   
});

router.post('/login', (req, res, next) => {
    UserContoller.logIn(req, res, next);
         
});


router.post('/logout', (req, res, next) => {
    UserContoller.logOut(req, res, next);
   
});




module.exports = router;

