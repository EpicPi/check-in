const mongoose = require('mongoose');
const router = require('express').Router();
require('../models/event');
require('../models/user');
const Event = mongoose.model('events');
const User = mongoose.model('users');

router.get('/get_event', async (req, res) => {
  const event = await Event.findOne({
    type: 'open',
    code: req.query.code.toUpperCase()
  });
  if (event) {
    res.send(event);
  } else {
    console.error(
      '[ERR] Event was not found. Passed in code: ' +
        req.body.code +
        ' in /open/get_event'
    );
  }
  // res.send(event);
});

router.post('/join', async (req, res) => {
  const event = await Event.findOne({
    type: 'open',
    code: req.body.code.toUpperCase()
  });
  if (event) {
    event.guestsAttend.push(req.body.id);
    event.save();
    res.send(event);
  } else
    console.error(
      '[ERR] Event was not found. Passed in id: ' +
        req.body.id +
        ' in /open/join'
    );
});

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
