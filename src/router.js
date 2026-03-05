const express = require('express');
const languagesController = require('./controller/languagesController');

const router = express.Router();

//Languages
router.get('/languages', languagesController.getAll);
router.post('/languages', languagesController.createLanguage);
//router.delete('/languages', languagesController.deleteLanguage);
//router.put('/languages', languagesController.updateLanguage);


module.exports = router;