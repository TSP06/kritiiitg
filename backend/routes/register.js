const express = require('express');
const router = express.Router();
const {addRegistration} = require('../controllers/registartion');

router.post('/',addRegistration);

module.exports = router;