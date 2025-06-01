import mysql from 'mysql2'
import dotenv from 'dotenv'
dotenv.config()

const pool = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
}).promise()

pool.getConnection()
    .then(conn => {
        console.log('Connected to the MySQL database');
        conn.release();
    })
    .catch(error => {
        console.error('Error connecting to the database:', error);
});

export { pool };