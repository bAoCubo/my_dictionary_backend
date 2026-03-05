const express = require('express');
const languagesController = require('./controller/languagesController');

const router = express.Router();

//Languages
router.get('/languages', languagesController.getAll);


module.exports = router;