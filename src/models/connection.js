const mysql = require('mysql2/promise');
require('dotenv').config();

async function connection() {
    try {
        const connection = await mysql.createConnection({
            uri: process.env.DATABASE_URL,
        });

        console.log('Connected to the database!');

        return connection;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

module.exports = connection;