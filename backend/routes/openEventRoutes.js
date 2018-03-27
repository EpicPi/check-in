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
        ' in /open/join'
    );
});

module.exports = router;
