const errorPrint = require('../helpers/debug/debughelpers').errorPrint;
const successPrint = require('../helpers/debug/debughelpers').successPrint;
const UserError = require('../helpers/errors/UserError');
const UserModel = require('../model/users');

const UserController = {
    createUser: function (req, res, next) {
        let username = req.body.username;
        let email = req.body.email;
        let password = req.body.password;

        UserModel.usernameExists(username)
            .then((usernameDoesNotExist) => {
                if (usernameDoesNotExist) {
                    return UserModel.emailExists(email);
                }
                else {
                    throw new UserError('Username already exists.', '/registration', 200);
                }
            })
            .then((emailDoesNotExist) => {
                if (emailDoesNotExist) {
                    return password;
                }
                else {
                    throw new UserError('Email already exists.', '/registration', 200);
                }
            })
            .then((hashedPassword) => {
                return UserModel.create(username, hashedPassword, email);
            })
            .then((userWasCreated) => {
                if (userWasCreated) {
                    successPrint("user has been created");
                    res.json({ status: "OK", message: "Registration successful", "redirect": '/login' });
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
                    res.json({ status: "OK", message: err.getMessage(), "redirect": '/registration' });
                }
                else {
                    next(err);
                }

            });
    },
    logIn: function (req, res, next) {

        let username = req.body.username;
        let password = req.body.password;
        let userID;
        console.log("USERNAME IS: " + username);

        //validate data
        UserModel.authenticate(username, password)
            .then((userData) => {
                if (userData) {
                    successPrint('Login Successful');
                    req.session.username = userData.user;
                    req.session.userID = userData.uid;
                    res.json({ status: "OK", message: 'login successful', "redirect": "/" });
                }
                else {
                    throw new UserError('Username or password is incorrect.', '/login', 200);
                }
            })
            .catch((err) => {
                if (err instanceof UserError) {
                    errorPrint(err.getMessage());
                    res.status(err.getStatus());
                    res.json({ status: "OK", message: err.getMessage(), "redirect": 'back' });
                } else {
                    next(err);
                }

            });

    },
    logOut: function (req, res, next) {
        req.session.destroy((err) => {
            if (err) {
                errorPrint('Failed to destroy session');
                next(err);
            } else {
                successPrint('session destroyed');
                res.clearCookie('csid');
                res.redirect('/');
            }
        })

    },
}

module.exports = UserController;