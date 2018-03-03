const express = require('express');
const router = express.Router();

const auth = require('./authRoutes');
const host = require('./hostEventRoutes');
const guest = require('./guestEventRoutes');
const event = require('./eventRoutes');

router.use('/host', host);
router.use('/auth', auth);
router.use('/guest', guest);
router.use('/event', event);

module.exports = router;
