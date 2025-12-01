// bin/db.js
const mysql = require('mysql2');

let connection;

function createDbConnection() {
    if (!connection) {
        connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '12345',
            database: 'cs208demo'
        });

        connection.connect(err => {
            if (err) {
                console.error("Database connection error:", err);
            } else {
                console.log("MySQL connected.");
            }
        });
    }
    return connection;
}

function dbMiddleware(req, res, next) {
    req.db = createDbConnection();
    next();
}

module.exports = { dbMiddleware };


