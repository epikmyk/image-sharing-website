const express = require('express');
const router = express.Router();
const LikesController = require('../controller/likes');
const db = require('../conf/database');


router.post('/likePost', (req, res, next) => {
    LikesController.createLikeForPost(req, res, next);

});

router.get('/getLikesByPostId:id', (req, res, next) => {

    LikesController.getLikesByPostId(req, res, next);

});

module.exports = router;