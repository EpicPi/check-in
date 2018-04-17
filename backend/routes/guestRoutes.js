const mongoose = require('mongoose');
const router = require('express').Router();
const User = mongoose.model('users');
const Event = mongoose.model('events');

router.get('/get_events', async (req, res) => {
  const user = await User.findById(req.user.id);
  const pOut = user.guestEvents.map(async id => Event.findById(id));
  let out = await Promise.all(pOut);
  out = out.filter(obj => obj !== null);
  res.send(out);
});

router.post('/join', async (req, res) => {
  const event = await Event.findById(req.body.id);
  if (event) {
    const user = await User.findById(req.user.id);
    user.guestEvents.push(event.id);
    user.save();
    event.guestsRSVP.push(user.id);
    event.save();
  } else
    console.error(
      '[ERR] Event was not found. Passed in id: ' +
        req.body.id +
        ' in /guest/join'
    );
});

router.post('/find', async (req, res) => {
  const event = await Event.findOne({ code: req.body.code.toUpperCase() });
  res.send(event);
});

router.post('/checkin', async (req, res) => {
  const event = await Event.findById(req.body.id);
  if (event) {
    if (!event.guestsAttend.filter(guest => guest === req.user.id).length) {
      //not user already checked-in
      event.guestsAttend.push({ guest: req.user.id, timestamp: new Date() });
      event.save();
      res.send(true);
    } else {
      res.send(false);
    }
  } else
    console.error(
      '[ERR] Event was not found. Passed in id: ' +
        req.body.id +
        ' in /guest/checkin'
    );
});

router.post('/check_checkin', async (req, res) => {
  const event = await Event.findById(req.body.id);
  res.send(event.checkinCode === req.body.code.toUpperCase());
});

module.exports = router;
