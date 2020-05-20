const db = require('../conf/database');

const PostModel = {
    create: function (title, desc, fileUploaded, destOfThumbnail, fk_userid) {
        let baseSQL = 'INSERT INTO posts (title, description, photopath, thumbnail, created, fk_userid) VALUE (?, ?, ?, ?, now(), ?)';
        return db.execute(baseSQL, [title, desc, fileUploaded, destOfThumbnail, fk_userid]);

    },
    search: function (searchTerm) {

        let baseSQL = 'SELECT p.id, p.title, p.description, p.thumbnail, u.username \
        FROM posts p \
        JOIN users u on p.fk_userid=u.id \
        WHERE title LIKE ?;';

        return db.query(baseSQL, [searchTerm]);


    },
    retrieveRecentPosts: function () {

        let baseSQL = 'SELECT p.id, p.title, p.description, p.thumbnail, u.username, p.created \
        FROM posts p \
        JOIN users u on p.fk_userid=u.id\
        ORDER BY p.created DESC';
        //LIMIT 32;

        return db.query(baseSQL);
    },
    retrievePostsById: function (_id) {
        let baseSQL = 'SELECT p.id, p.title, p.description, p.photopath, u.username, p.created \
        FROM posts p \
        JOIN users u on p.fk_userid=u.id\
        WHERE p.id=?;';

        return db.query(baseSQL, _id);
    }

}

module.exports = PostModel;