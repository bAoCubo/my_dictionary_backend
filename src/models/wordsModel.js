const connection = require('./connection');

const getAll = async () => {
    const connect = await connection();
    const [words] = await connect.query('SELECT * FROM words');
    await connect.end();
    return words;
};

const createWord = async (words) => {
    const { word, meaning, synonyms, antonyms, category_id, language_id } = words;
    const connect = await connection();
    const [createdWord] = await connect.query('INSERT INTO words(word, meaning, synonyms, antonyms, category_id, language_id) VALUES (?, ?, ?, ?, ?, ?)',
        [word, meaning, synonyms, antonyms, category_id, language_id]);
    await connect.end();
    return createdWord.insertId;
};

module.exports = {
    getAll,
    createWord,
};