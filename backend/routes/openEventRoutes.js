const mongoose = require('mongoose');
const router = require('express').Router();
require('../models/event');
const Event = mongoose.model('events');

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
  } else
    console.error(
      '[ERR] Event was not found. Passed in id: ' +
        req.body.id +
        ' in /open/join'
    );
});

router.post('/replace', async (req, res) => {
  const event = await Event.findById(req.body.id);
  if (event) {
    // TODO
  } else {
    console.error(
      '[ERR] Event was not found. Passed in id: ' +
        req.body.id +
        ' in /event/replace'
    );
  }
});

module.exports = router;
