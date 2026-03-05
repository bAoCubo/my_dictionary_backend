const connection = require('./connection');

const getAll = async () => {
    const connect = await connection();
    const [languages] = await connect.query('SELECT * FROM languages');
    await connect.end();
    return languages;
};

const createLanguage = async (language) => {
    const { name } = language;
    const connect = await connection();
    const [createdLanguage] = await connect.query('INSERT INTO languages(name) VALUES (?)', [name]);
    await connect.end();
    return createdLanguage.insertId;
};

module.exports = {
    getAll,
    createLanguage,
};