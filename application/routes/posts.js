
const express = require('express');
const router = express.Router();
const errorPrint = require('../helpers/debug/debughelpers').errorPrint;
const successPrint = require('../helpers/debug/debughelpers').successPrint;
const db = require('../conf/database');
const multer = require('multer');
const sharp = require('sharp');
const crypto = require('crypto')


var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "public/images/uploads")
    },
    filename: function (req, file, cb) {
        let fileExt = file.mimetype.split("/")[1];
        let randomName = crypto.randomBytes(22).toString("hex");
        cb(null, `${randomName}.${fileExt}`);
    }
})

var uploader = multer({ storage: storage });

router.post('/createPost', uploader.single('uploadImage'), (req, res, next) => {

    
    let fileUploaded = req.file.path;
    
    let fileAsThumbnail = `thumbnail-${req.file.filename}`;
    
    let destOfThumbnail = req.file.destination + "/" + fileAsThumbnail;
    
    let title = req.body.title;
    let desc = req.body.description;
    let fk_userid = req.session.userID;

    
    sharp(fileUploaded)
        .resize(200)
        .toFile(destOfThumbnail)
        .then(() => {
            let baseSQL = 'INSERT INTO posts (title, description, photopath, thumbnail, created, fk_userid) VALUE (?, ?, ?, ?, now(), ?)';
            return db.execute(baseSQL, [title, desc, fileUploaded, destOfThumbnail, fk_userid]);
            
        })
        .then(([results, fields]) =>{
            if(results && results.affectedRows) {
                successPrint('new post created');
                //res.redirect('/');
                res.json({status: "OK", message: "Post was created", "redirect": "/"});
            }
            else {
                res.json({status: "OK", message: "Post was not created", "redirect": "/postimage"});
                //next(Error('post was not created'));
            }
        })
        .catch((err) => {next(err)});

    console.log(req.file);
    //res.send('file uploaded');
});

router.get('/search/:searchTerm', (req, res, next) => {
    let searchTerm = req.params.searchTerm;
    /*
    console.log(searchTerm);
    res.send('');*/
    let baseSQL = 'SELECT p.id, p.title, p.description, p.thumbnail, u.username \
    FROM posts p \
    JOIN users u on p.fk_userid=u.id \
    WHERE title LIKE ?;';
    searchTerm = '%' + searchTerm + '%';
    db.query(baseSQL, [searchTerm])
    .then(([results, fields]) => {
        res.json(results);
    })
    .catch((err) => next(err));
});

router.get('/getRecentPosts', (req, res, next) => {
   
    /*
    console.log(searchTerm);
    res.send('');*/
    let baseSQL = 'SELECT p.id, p.title, p.description, p.thumbnail, u.username, p.created \
    FROM posts p \
    JOIN users u on p.fk_userid=u.id\
    ORDER BY p.created DESC\
    LIMIT 32';

    db.query(baseSQL,)
    .then(([results, fields]) => {
        res.json(results);
    })
    .catch((err) => next(err));
});

router.get('/imagePost/:id', (req, res, next) => {
    res.sendFile('viewimage.html', {root:'public/html'});
});

router.get('/getPostById/:id', (req, res, next) => {
    let _id = req.params.id;
    
    let baseSQL = 'SELECT p.id, p.title, p.description, p.photopath, u.username, p.created \
    FROM posts p \
    JOIN users u on p.fk_userid=u.id\
    WHERE p.id=?;';

    db.query(baseSQL, _id)
    .then(([results, fields]) => {
        res.json(results[0]);
    })
    .catch((err) => next(err));

})


module.exports = router;