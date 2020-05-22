const errorPrint = require('../helpers/debug/debughelpers').errorPrint;
const successPrint = require('../helpers/debug/debughelpers').successPrint;
const LikeModel = require('../model/likes');
const db = require('../conf/database');

const LikesController = {
    createLikeForPost: function (req, res, next) {
        
        let fk_postid = req.body.imagepostid_likes;
        console.log(req.body.imagepostid_likes);
        //let _id = req.params.id;
        let fk_userid = req.session.userID;

        LikeModel.create(fk_postid, fk_userid)
        .then(([results, fields]) => {
            console.log(results);
            res.json(results.length);
        })
        .catch((err) => {
            throw err;
        })
        
    },

    getLikesByPostId: function (req, res, next) {

        let _id = req.params.id;
        LikeModel.retrieveLikesByPostId(_id)
        .then(([results, fields]) => {
            console.log(results);
            res.json(results);
        })
        .catch((err) => next(err));
    }


}

module.exports = LikesController;