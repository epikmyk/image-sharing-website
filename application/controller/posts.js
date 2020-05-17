const errorPrint = require('../helpers/debug/debughelpers').errorPrint;
const successPrint = require('../helpers/debug/debughelpers').successPrint;
const PostModel = require('../model/posts');

const multer = require('multer');
const sharp = require('sharp');
const crypto = require('crypto')


const PostController = {
    createPost: function (req, res, next) {
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
                return PostModel.create(title, desc, fileUploaded, destOfThumbnail, fk_userid);

            })
            .then(([results, fields]) => {
                if (results && results.affectedRows) {
                    successPrint('new post created');
                    res.json({ status: "OK", message: "Post was created", "redirect": "/" });
                }
                else {
                    res.json({ status: "OK", message: "Post was not created", "redirect": "/postimage" });
                }
            })
            .catch((err) => { next(err) });

        console.log(req.file);
    },
    searchPosts: function (req, res, next) {
        let searchTerm = req.params.searchTerm;
        searchTerm = '%' + searchTerm + '%';
        
        return PostModel.search(searchTerm)
            .then(([results, fields]) => {
                res.json(results);
            })
            .catch((err) => next(err));
    },
    getRecentPosts: function (req, res, next) {
        return PostModel.retrieveRecentPosts()
            .then(([results, fields]) => {
                res.json(results);
            })
            .catch((err) => next(err));
    },
    getPostById: function (req, res, next) {
        let _id = req.params.id;

        return PostModel.retrievePostsById(_id)
            .then(([results, fields]) => {
                res.json(results[0]);
            })
            .catch((err) => next(err));
    },
    fileUploader: function () {
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

        return uploader;
    }
    
}

module.exports = PostController;