const languagesModel = require('../models/languagesModel');

const getAll = async (_req, res) => {
    const languages = await languagesModel.getAll();
    return res.status(200).json({ languages });
}

const createLanguage = async (req, res) => {
    const createdLanguage = await languagesModel.createLanguage(req.body);
    return res.status(201).json({ createdLanguage });
}

module.exports = {
    getAll,
    createLanguage,
}