const mongoose = require('mongoose');
const router = require('express').Router();
require('../models/event');
require('../models/user');
const User = mongoose.model('users');
const Event = mongoose.model('events');

router.post('/rsvp', async (req, res) => {
  const event = await Event.findById(req.body.id);

  if (event) {
    const pOut = event.guestsRSVP.map(async id => User.findById(id));
    const out = await Promise.all(pOut);
    res.send(out);
  } else
    console.log(
      '[ERR] Event was not found. Passed in id: ' +
        req.body.id +
        ' in /event/rsvp'
    );
});

router.post('/attend', async (req, res) => {
  const event = await Event.findById(req.body.id);
  if (event) {
    const pOut = event.guestsAttend.map(async id => User.findById(id));
    const out = await Promise.all(pOut);
    res.send(out);
  } else
    console.log(
      '[ERR] Event was not found. Passed in id: ' +
        req.body.id +
        ' in /event/attend'
    );
});

module.exports = router;
