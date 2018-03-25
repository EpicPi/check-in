const mongoose = require('mongoose');
const router = require('express').Router();
require('../models/event');
require('../models/user');
const User = mongoose.model('users');
const Event = mongoose.model('events');

router.post('/add_event', async (req, res) => {
  const event = await Event({
    name: req.body.name,
    code: req.body.code.toLowerCase(),
    dates: req.body.dates,
    guestsRSVP: [],
    guestsAttend: [],
    type: req.body.type,
    checkinCode: req.body.checkinCode.toLowerCase(),
    info: req.body.info
  }).save();
  const user = await User.findById(req.user.id);
  user.hostEvents.push(event.id);
  user.save();
  res.send(event);
});

router.post('/remove_event', async (req, res) => {
  const user = await User.findById(req.user.id);
  user.hostEvents = user.hostEvents.filter(event => req.body._id !== event);
  user.save();
  await Event.findById(req.body._id).remove();
});

router.get('/get_events', async (req, res) => {
  const user = await User.findById(req.user.id);
  const pOut = user.hostEvents.map(async id => Event.findById(id));
  const out = await Promise.all(pOut);
  res.send(out);
});

router.post('/edit_event', async (req, res) => {
  const event = await Event.findById(req.body._id);
  if (event) {
    //only want to update the editable values
    event.name = req.body.name;
    event.code = req.body.code.toLowerCase();
    event.dates = req.body.dates;
    event.checkinCode = req.body.checkinCode.toLowerCase();
    event.info = req.body.info;
    event.type = req.body.type;
    event.save();
    res.send(event);
  } else
    console.error(
      '[ERR] Event was not found. Passed in id: ' +
        req.body.id +
        ' in /guest/checkin'
    );
});

router.post('/check_code', async (req, res) => {
  const event = await Event.findOne({ code: req.body.code.toLowerCase() });
  if (req.body.code !== '')
    res.send(event === null); // code available?
  else res.send(false);
});

router.post('/check_in', async (req, res) => {
  const event = await Event.findById(req.body.event);
  const guest = await User.findById(req.body.guest);
  if (!event) {
    console.error(
      '[ERR] Event was not found. Passed in id: ' +
        req.body.id +
        ' in /host/check_in'
    );
  } else if (!guest) {
    console.error(
      '[ERR] Guest was not found. Passed in id: ' +
        req.body.id +
        ' in /host/check_in'
    );
  } else {
    if (!event.guestsAttend.filter(el => el === guest.id).length) {
      //not guest already checked-in
      event.guestsAttend.push(guest.id);
      event.save();
      res.send(true);
    } else {
      res.send(false);
    }
  }
});

module.exports = router;
