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
const bcrypt = require('bcrypt');

const errorPrint = require('../helpers/debug/debughelpers').errorPrint;
const successPrint = require('../helpers/debug/debughelpers').successPrint;
const UserError = require('../helpers/errors/UserError');
const db = require('../conf/database');


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
    let username = req.body.uname;
    let email = req.body.email;
    let password = req.body.password;

    //validate data

    db.execute('SELECT * FROM users WHERE username=?;', [username])
        .then(([results, fields]) => {
            if (results && results.length == 0) {
                return db.execute('SELECT * FROM users WHERE email=?;', [email]);
            } else {

                throw new UserError('username already exists', '/registration', 200);
            }
        })
        .then(([results, fields]) => {
            if (results && results.length == 0) {
                return bcrypt.hash(password, 10);
                //let baseSQL = 'INSERT INTO users (username, email, password, created) Values (?, ?, ?, now())';
                //return db.execute('INSERT INTO users (username, email, password, created) Values (?, ?, ?, now())', [username, email, password]);
            } else {

                throw new UserError('email already exists', '/registration', 200);
            }
        })

        .then((hashedPassword) => {
            let baseSQL = 'INSERT INTO users (username, email, password, created) Values (?, ?, ?, now());';
            return db.execute(baseSQL, [username, email, hashedPassword]);
        })
        .then(([results, fields]) => {
            if (results && results.affectedRows) {
                successPrint("user has been created");
                res.redirect('/login');
            }
            else {
                throw new UserError(
                    'Server Error, user could not be created',
                    '/registration',
                    500
                );

            }
        })
        .catch((err) => {
            if (err instanceof UserError) {
                errorPrint(err.getMessage());
                res.status(err.getStatus());
                res.redirect(err.getRedirectURL());
            }
            else {
                next(err);
            }

        });


    /*
let baseSQL = 'INSERT INTO users (username, email, password, created) Values (?, ?, ?, now())';
db.query(baseSQL, [username, email, password])
    .then(([results, fields]) => {
        if(results && results.affectedRows){
             
            res.redirect('/login')
        }else
        {
            res.send('user was not made')
        }
    })
    .catch((err) => {
        next(err);
    })*/

    //validate data
});

router.post('/login', (req, res, next) => {
    let username = req.body.username;
    let password = req.body.password;
    let userID;

    //validate data

    let baseSQL = 'SELECT id, password FROM users WHERE username = ?';
    db.execute(baseSQL, [username])
        .then(([results, fields]) => {
            if (results && results.length == 1) {
                //req.session.username = username;
                //req.session.opp = 1;
                //req.session.opp = 1;
                let hPassword = results[0].password;
                userID = results[0].id;
                return bcrypt.compare(password, hPassword);

            } else {
                throw new UserError('username or password is incorrect', '/login', 200);
            }
        })
        .then((passwordMatches) => {
            if (passwordMatches) {
                //req.session.username = username;
               // req.session.opp = 1;
                successPrint('Login Successful');
                req.session.username = username;
                req.session.userID = userID;
                res.redirect('/');
            } else {
                throw new UserError('username or password is incorrect', '/login', 200);
            }
        })
        .catch((err) => {
            if (err instanceof UserError) {
                errorPrint(err.getMessage());
                res.status(err.getStatus());
                res.redirect(err.redirectURL());
            } else {
                next(err);
            }

        })
})


router.post('/logout', (req, res, next) => {
    /*if (req.session.username) {
        req.session.username.destroy();
        console.log("Logged out");
    }

    res.redirect('/');*/

    req.session.destroy((err) => {
        if(err) {
            errorPrint('Failed to destroy session');
            next(err);
        } else {
            successPrint('session destroyed');
            res.clearCookie('csid');
            res.redirect('/');
        }
    })
})




module.exports = router;

