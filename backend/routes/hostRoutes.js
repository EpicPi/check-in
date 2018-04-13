const mongoose = require('mongoose');
const router = require('express').Router();
const User = mongoose.model('users');
const Event = mongoose.model('events');
const Group = mongoose.model('groups');

const mapOpenUsers = async openUsers => {
  if (!openUsers || openUsers.constructor !== Array) return [];
  const pOut = openUsers.map(async el => {
    let usr;
    if (el._id) {
      usr = await User.findById(el._id);
      usr.name = el.name;
      usr.open = true;
    } else {
      usr = User({
        name: el.name,
        open: true
      });
    }
    await usr.save();
    return usr.id;
  });
  const out = await Promise.all(pOut);
  return out;
};

router.post('/add_event', async (req, res) => {
  const event = await Event({
    name: req.body.name,
    code: req.body.code.toUpperCase(),
    dates: req.body.dates,
    guestsRSVP: [],
    guestsAttend: [],
    type: req.body.type,
    checkinCode: req.body.checkinCode.toUpperCase(),
    info: req.body.info,
    open: {
      guestsRSVP: await mapOpenUsers(req.body.openRsvp),
      walkin: []
    },
    group: req.body.group,
    repeats: {
      sunday: req.body.repeats['sunday'] === 'true',
      monday: req.body.repeats['monday'] === 'true',
      tuesday: req.body.repeats['tuesday'] === 'true',
      wednesday: req.body.repeats['wednesday'] === 'true',
      thursday: req.body.repeats['thursday'] === 'true',
      friday: req.body.repeats['friday'] === 'true',
      saturday: req.body.repeats['saturday'] === 'true'
    }
  }).save();
  if (!req.body.group) {
    const user = await User.findById(req.user.id);
    user.hostEvents.push(event.id);
    user.save();
    res.send(event);
  } else {
    const group = await Group.findById(req.body.group);
    if (group) {
      group.events.push(event.id);
      group.save();
      res.send(event);
    } else
      console.error(
        '[ERR] Group was not found. Passed in id: ' +
          req.body.group +
          ' in /host/add_event'
      );
  }
});

router.post('/edit_event', async (req, res) => {
  const event = await Event.findById(req.body._id);
  if (event) {
    //only want to update the editable values
    event.name = req.body.name;
    event.code = req.body.code.toUpperCase();
    event.dates = req.body.dates;
    event.checkinCode = req.body.checkinCode.toUpperCase();
    event.info = req.body.info;
    event.type = req.body.type;
    event.repeats = {
      sunday: req.body.repeats['sunday'] === 'true',
      monday: req.body.repeats['monday'] === 'true',
      tuesday: req.body.repeats['tuesday'] === 'true',
      wednesday: req.body.repeats['wednesday'] === 'true',
      thursday: req.body.repeats['thursday'] === 'true',
      friday: req.body.repeats['friday'] === 'true',
      saturday: req.body.repeats['saturday'] === 'true'
    };

    //open users
    const newOpenUsers = await mapOpenUsers(req.body.openRsvp);
    const removedUsers = event.open.guestsRSVP.filter(
      el => !newOpenUsers.includes(el)
    );
    event.guestsAttend = event.guestsAttend.filter(
      el => !removedUsers.includes(el)
    );
    removedUsers.forEach(async el => await User.findById(el).remove());
    event.open.guestsRSVP = newOpenUsers;

    event.save();
    res.send(event);
  } else
    console.error(
      '[ERR] Event was not found. Passed in id: ' +
        req.body.id +
        ' in /host/edit_event'
    );
});

router.post('/remove_event', async (req, res) => {
  const event = await Event.findById(req.body._id);
  event.open.guestsRSVP.forEach(async el => await User.findById(el).remove());
  event.remove();

  if (!req.body.group) {
    const user = await User.findById(req.user.id);
    user.hostEvents = user.hostEvents.filter(event => req.body._id !== event);
    user.save();
  } else {
    const group = await Group.findById(req.body.group);
    if (group) {
      group.events = group.events.filter(event => req.body._id !== event);
      group.save();
    } else
      console.error(
        '[ERR] Group was not found. Passed in id: ' +
          req.body.group +
          ' in /host/add_event'
      );
  }
});

router.get('/get_events', async (req, res) => {
  const user = await User.findById(req.user.id);
  const pOut = user.hostEvents.map(async id => Event.findById(id));
  const out = await Promise.all(pOut);
  res.send(out);
});

router.get('/get_groups', async (req, res) => {
  const user = await User.findById(req.user.id);
  const out = user.hostGroups.map(id => Group.findById(id));
  res.send(await Promise.all(out));
});

router.post('/check_code', async (req, res) => {
  const event = await Event.findOne({ code: req.body.code.toUpperCase() });
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
