const express = require('express');
const router = express.Router();
const {addRegistration, fetchRegistrationByTitleAndPs} = require('../controllers/registartion');

router.post('/',addRegistration);
router.get('registration/:title/:ps',fetchRegistrationByTitleAndPs);

module.exports = router;
