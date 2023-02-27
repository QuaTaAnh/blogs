const express = require('express');
const router = express.Router();

const siteController = require('../app/controllers/SiteController');
router.use('/', siteController.home);
router.use('/search', siteController.search);

module.exports = router;