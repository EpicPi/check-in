const mongoose = require('mongoose');
const router = require('express').Router();
const User = mongoose.model('users');
const Event = mongoose.model('events');
const Group = mongoose.model('groups');

router.post('/join', async (req, res) => {
  const user = await User.findById(req.user.id);
  const group = await Group.findById(req.body._id);
  if (group) {
    group.users.push(user.id);
    group.save();
    user.hostGroups.push(group.id);
    user.save();
  } else
    console.error(
      '[ERR] Group was not found. Passed in code: ' +
        req.body.code +
        ' in /group/join'
    );
});

router.post('/check', async (req, res) => {
  const group = await Group.findOne({ code: req.body.code });
  res.send(group);
});

router.post('/create', async (req, res) => {
  const user = await User.findById(req.user.id);
  const group = await Group({
    name: req.body.name,
    code: req.body.code,
    users: [req.user.id],
    events: []
  }).save();
  user.hostGroups.push(group.id);
  user.save();
  res.send(group);
});

router.post('/edit', async (req, res) => {
  const group = await Group.findById(req.body._id);
  if (group) {
    group.name = req.body.name;
    group.code = req.body.code;
    group.save();
  } else
    console.error(
      '[ERR] Group was not found. Passed in code: ' +
        req.body.id +
        ' in /group/edit'
    );
});

router.post('/leave', async (req, res) => {
  const group = await Group.findById(req.body.id);
  const user = await User.findById(req.user.id);
  if (group) {
    user.hostGroups = user.hostGroups.filter(el => el !== group.id);
    user.save();

    group.users = group.users.filter(el => el !== user.id);
    if (group.users.length > 0) {
      group.save();
    } else {
      group.remove();
    }
  } else
    console.error(
      '[ERR] Group was not found. Passed in code: ' +
        req.body.id +
        ' in /group/leave'
    );
});

router.post('/get_events', async (req, res) => {
  const group = await Group.findById(req.body.id);
  if (group) {
    let out = group.events.map(async el => await Event.findById(el));
    out = await Promise.all(out).then(events => events.filter(el => el));
    res.send(out);
  } else
    console.error(
      '[ERR] Group was not found. Passed in id: ' +
        req.body.id +
        ' in /group/get_events'
    );
});

module.exports = router;
