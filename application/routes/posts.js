
const express = require('express');
const router = express.Router();
const PostController = require('../controller/posts');

router.post('/createPost', PostController.fileUploader().single('uploadImage'), (req, res, next) => {
    PostController.createPost(req, res, next);
});

router.get('/search/:searchTerm', (req, res, next) => {

    PostController.searchPosts(req, res, next);
});

router.get('/getRecentPosts', (req, res, next) => {
   
    PostController.getRecentPosts(req, res, next);
});

router.get('/imagePost/:id', (req, res, next) => {
    res.sendFile('viewimage.html', {root:'public/html'});
});

router.get('/getPostById/:id', (req, res, next) => {

    PostController.getPostById(req, res, next);  
});


module.exports = router;