const express = require('express');
const router = express.Router();
const {addRegistration} = require('../controllers/registartion');

router.post('/',addRegistration);
router.get('/fetchregister',fetchRegistrationByTitleAndPs);

module.exports = router;
