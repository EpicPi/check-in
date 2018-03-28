const mongoose = require('mongoose');
const router = require('express').Router();
require('../models/event');
require('../models/user');
const Event = mongoose.model('events');

router.get('/get_event', async (req, res) => {
  const event = await Event.findOne({
    type: 'open',
    code: req.query.code.toUpperCase()
  });
  if (event) res.send(event);
  else res.send(false);
});

router.post('/check_in', async (req, res) => {
  const event = await Event.findOne({
    type: 'open',
    code: req.body.code.toUpperCase()
  });
  if (event) {
    event.guestsAttend.push(req.body.name);
    event.save();
  } else
    console.error(
      '[ERR] Event was not found. Passed in id: ' +
        req.body.id +
        ' in /openRsvp/join'
    );
});

router.post('/rsvp', async (req, res) => {
  const event = await Event.findById(req.body.id);
  if (event) {
    const pOut = event.openRsvp.guestsRSVP.map(async id => User.findById(id));
    const out = await Promise.all(pOut);
    res.send(out);
  } else
    console.error(
      '[ERR] Event was not found. Passed in id: ' +
        req.body.id +
        ' in /event/rsvp'
    );
});

module.exports = router;
