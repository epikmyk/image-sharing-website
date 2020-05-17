const express = require('express');
const router = express.Router();
const CommentsController = require('../controller/comments');
const db = require('../conf/database');


router.post('/createComment', (req, res, next) => {
    CommentsController.createComment(req, res, next);

});

router.get('/getCommentsByPostId:id', (req, res, next) => {

    CommentsController.getCommentsByPostId(req, res, next);

});

module.exports = router;

