const mysql = require('mysql2');

const pool = mysql.createPool({
    host: "localhost",
    user: "photoapp",
    password: "xowl33",
    database: "hashtagimgdb",
    connectionLimit: 50,
    
    debug:false,
});

const promisePool = pool.promise();
module.exports = promisePool;