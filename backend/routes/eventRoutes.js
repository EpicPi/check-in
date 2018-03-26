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
    console.error(
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
    console.error(
      '[ERR] Event was not found. Passed in id: ' +
        req.body.id +
        ' in /event/attend'
    );
});

/**
 * replaces the current guestsRSVP with the given rsvp
 * creates list of new users with name
 */
router.post('/replace', async (req, res) => {
  const event = await Event.findById(req.body.id);
  event.guestsRSVP = [];
  if (event) {
    // split based on end of line
    let rsvps = req.body.rsvps.split(/\r?\n/);
    for (let ind in rsvps) {
      const guest = await User({
        name: rsvps[ind]
      }).save();
      event.guestsRSVP.push(guest);
    }
    event.save();
    res.send(event);
  } else {
    console.error(
      '[ERR] Event was not found. Passed in id: ' +
        req.body.id +
        ' in /event/replace'
    );
  }
});

module.exports = router;
