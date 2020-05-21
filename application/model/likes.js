const db = require('../conf/database');
const UserError = require('../helpers/errors/UserError');

const LikeModel = {

    retrieveLikesByPostId: function (_id) {
        let baseSQL = 'Select l.like_, l.created, u.username \
        FROM likes l \
        JOIN posts p on l.fk_postid=p.id\
        JOIN users u on l.fk_userid=u.id\
        Where l.fk_postid=? AND l.like_="1"';

        return db.query(baseSQL, _id);
    },

    create: function (fk_postid, fk_userid) {
        let baseSQL = 'Select l.like_, l.created, u.username \
        FROM likes l \
        JOIN posts p on l.fk_postid=p.id\
        JOIN users u on l.fk_userid=u.id\
        Where l.fk_postid=? AND l.fk_userid=?';

        return db.execute(baseSQL, [fk_postid, fk_userid])
        .then(([results, fields]) => {
            if(results && results.length == 1) {
                if(results[0].like_ == '1')
                {
                    let baseSQL = 'UPDATE likes l\
                    JOIN posts p on l.fk_postid=p.id\
                    JOIN users u on l.fk_userid=u.id\
                    SET l.like_ = "0" \
                    Where l.fk_postid=? AND l.fk_userid=?';
                    return db.execute(baseSQL, [fk_postid, fk_userid]);
                }
                else
                {   
                    let baseSQL = 'UPDATE likes l\
                    JOIN posts p on l.fk_postid=p.id\
                    JOIN users u on l.fk_userid=u.id\
                    SET l.like_ = "1" \
                    Where l.fk_postid=? AND l.fk_userid=?';
                    return db.execute(baseSQL, [fk_postid, fk_userid]);
                }
            }
            else {
                let baseSQL = 'INSERT INTO likes (like_, created, fk_postid, fk_userid) Values (?, now(), ?, ?);';
                return db.execute(baseSQL, ['1', fk_postid, fk_userid]);
            }   
        })
    }


}

module.exports = LikeModel;