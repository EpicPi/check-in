const mongoose = require('mongoose');
const router = require('express').Router();
require('../models/event');
const Event = mongoose.model('events');

router.get('/get_event', async (req, res) => {
  const event = await Event.findOne({
    type: 'open',
    code: req.query.code.toUpperCase()
  });
  res.send(event);
});

router.post('/join', async (req, res) => {
  const event = await Event.findOne({
    type: 'open',
    code: req.body.code.toUpperCase()
  });
  if (event) {
    event.guestsAttend.push(req.body.id);
    event.save();
  } else
    console.error(
      '[ERR] Event was not found. Passed in id: ' +
        req.body.id +
        ' in /open/join'
    );
});

module.exports = router;
