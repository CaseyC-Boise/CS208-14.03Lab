// db.js
const mysql = require('mysql2');

let connection = null;

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
                console.error('Error connecting to database:', err);
                
            } else {
                console.log('Database connected!');
            }
        });
    }
    console.log('Using existing database connection');
    return connection;
}

function dbMiddleware(req, res, next) {
    req.db = createDbConnection();
    console.log(`DB middleware id: ${req.db.threadId}, called at: ${Date.now()}`);
    next();
}

function closeDbConnection() {
    if (connection) {
        connection.end(err => {
            if (err) {
                console.error('Error closing database connection:', err);
            } else {
                console.log('Database connection closed.');
                connection = null;
            }
        });
    }
}

module.exports = { dbMiddleware, createDbConnection, closeDbConnection };