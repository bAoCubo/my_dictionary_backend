const connection = require('./connection');

const getAll = async () => {
    const connect = await connection();
    const [languages] = await connect.query('SELECT * FROM languages');
    await connect.end();
    return languages;
};

module.exports = {
    getAll,
};