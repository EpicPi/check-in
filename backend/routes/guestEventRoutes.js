const mongoose = require('mongoose');
const router = require('express').Router();
require('../models/event');
require('../models/user');
const User = mongoose.model('users');
const Event = mongoose.model('events');

router.get('/get_events', async (req, res) => {
  const user = await User.findById(req.user.id);
  const pOut = user.guestEvents
    .map(async id => Event.findById(id))
    .filter(obj => obj !== undefined);
  const out = await Promise.all(pOut);
  res.send(out);
});

router.post('/join', async (req, res) => {
  const event = await Event.findById(req.body.id);
  if (event) {
    const user = await User.findById(req.user.id);
    user.guestEvents.push(event.id);
    user.extra = req.body.extra;
    user.save();
    event.guestsRSVP.push(user.id);
    event.save();
  }
});

router.post('/find', async (req, res) => {
  const event = await Event.findOne({ code: req.body.code });
  res.send(event);
});

router.post('/checkin', async (req, res) => {
  const event = await Event.findById(req.body.id);
  if (!event.guestsAttend.filter(guest => guest === req.user.id).length) {
    //not user already checked-in
    event.guestsAttend.push(req.user.id);
    event.save();
    res.send(true);
  } else {
    res.send(false);
  }
});

router.post('/check_checkin', async (req, res) => {
  const event = await Event.findById(req.body.id);
  res.send(event.checkinCode === req.body.code);
});

module.exports = router;
