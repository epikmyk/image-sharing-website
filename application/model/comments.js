const db = require('../conf/database');

const CommentModel = {
    create: function (comment, fk_postid, fk_userid) {
        let baseSQL = 'INSERT INTO comments (comment, created, fk_postid, fk_userid) Values (?, now(), ?, ?);';
        return db.execute(baseSQL, [comment, fk_postid, fk_userid]);
    },

    retrieveCommentsByPostId: function (_id) {
        let baseSQL = 'Select c.comment, c.created \
        FROM comments c \
        JOIN posts p on c.fk_postid=p.id\
        Where c.fk_postid=?';

        return db.query(baseSQL, _id);
    }



}

module.exports = CommentModel;