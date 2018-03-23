const mongoose = require('mongoose');
const router = require('express').Router();
require('../models/event');
require('../models/user');
const User = mongoose.model('users');
const Event = mongoose.model('events');

router.post('/rsvp', async (req, res) => {
  const event = await Event.findById(req.body.id);
  if (event) {
    //cant use map here cause async await is weird
    const out = [];
    for (let i = 0; i < event.guestsRSVP.length; i++) {
      const a = await User.findById(event.guestsRSVP[i]);
      out.push(a);
    }
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
    //cant use map here cause async await is weird
    const out = [];
    for (let i = 0; i < event.guestsAttend.length; i++) {
      const a = await User.findById(event.guestsAttend[i]);
      out.push(a);
    }
    res.send(out);
  } else
    console.log(
      '[ERR] Event was not found. Passed in id: ' +
        req.body.id +
        ' in /event/attend'
    );
});

module.exports = router;
