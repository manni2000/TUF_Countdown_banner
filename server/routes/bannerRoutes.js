const express = require('express');
const { getBanner, updateBanner } = require('../controllers/bannerController');

const router = express.Router();

router.get('/banner', getBanner);
router.put('/banner', updateBanner);

module.exports = router;
