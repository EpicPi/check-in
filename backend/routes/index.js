const express = require('express');
const router = express.Router();

const auth = require('./authRoutes');
const host = require('./hostEventRoutes');
const guest = require('./guestEventRoutes');
const event = require('./eventRoutes');
const open = require('./openEventRoutes');
const group = require('./groupRoutes');

const checkUser = (req, res, next) => {
  if (!req.user) return res.send('not authorized');
  next();
};

router.use('/auth', auth);
router.use('/open', open);

router.use('/host', checkUser, host);
router.use('/guest', checkUser, guest);
router.use('/event', checkUser, event);
router.use('/group', checkUser, group);

module.exports = router;
