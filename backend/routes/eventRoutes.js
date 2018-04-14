const mongoose = require('mongoose');
const router = require('express').Router();
const User = mongoose.model('users');
const Event = mongoose.model('events');

router.post('/rsvp', async (req, res) => {
  const event = await Event.findById(req.body.id);

  if (event) {
    let pOut = event.guestsRSVP.map(async id => User.findById(id));
    pOut = pOut.concat(
      event.open.guestsRSVP.map(async id => User.findById(id))
    );
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
    const pOut = event.guestsAttend.map(async guest => {
      // TODO: fix this
      // earlier version only had list of guests
      // but now it's list of json {guest, timestamp}
      let user = null;
      if (typeof guest === 'string' || guest instanceof String) {
        user = await User.findById(guest);
      } else {
        user = await User.findById(guest._id);
      }

      let isRepeat = await event.isRepeat();
      if (isRepeat) {
        let temp = null;
        for (let ind = 0; ind < event.guestsAttend.length; ind++) {
          let obj = event.guestsAttend[ind];
          let date = new Date(obj.timestamp);
          let now = new Date();
          // if this user checked in today
          // FIXME: better implementation to get the latest event check-in
          if (
            user._id.equals(obj._id) &&
            date.getDate() === now.getDate() &&
            date.getMonth() === now.getMonth() &&
            date.getFullYear() === now.getFullYear()
          ) {
            temp = user;
          }
        }
        user = temp;
      }
      return user;
    });
    // filter null users
    const out = await Promise.all(pOut).then(users => users.filter(u => u));
    res.send(out);
  } else
    console.error(
      '[ERR] Event was not found. Passed in id: ' +
        req.body.id +
        ' in /event/attend'
    );
});

module.exports = router;
