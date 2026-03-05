const languagesModel = require('../models/languagesModel');

const getAll = async (_req, res) => {
    const languages = await languagesModel.getAll();
    return res.status(200).json({ languages });
}

module.exports = {
    getAll,
}