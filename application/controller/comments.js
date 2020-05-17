const errorPrint = require('../helpers/debug/debughelpers').errorPrint;
const successPrint = require('../helpers/debug/debughelpers').successPrint;
const CommentModel = require('../model/comments');
const db = require('../conf/database');

const CommentsController = {
    createComment: function (req, res, next) {
        let fk_postid = req.body.imagepostid;
        let comment = req.body.comments;

        let fk_userid = req.session.userID;

        CommentModel.create(comment, fk_postid, fk_userid);
        res.redirect('back');
    },

    getCommentsByPostId: function (req, res, next) {

        let _id = req.params.id;
        CommentModel.retrieveCommentsByPostId(_id)
        .then(([results, fields]) => {
            console.log(results);
            res.json(results);
        })
        .catch((err) => next(err));
    }

    
}

module.exports = CommentsController;