const mongoose = require('mongoose');
const router = require('express').Router();
const User = mongoose.model('users');
const Event = mongoose.model('events');
const Group = mongoose.model('groups');

router.post('/join', async (req, res) => {
  const user = await User.findById(req.user.id);
  const group = await Group.findById(req.body.id);
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

router.post('/add_group', async (req, res) => {
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

router.post('edit_group', async (req, res) => {
  const group = await Group.findById(req.body.id);
  if (group) {
    group.name = req.body.name;
    group.code = req.body.code;
  } else
    console.error(
      '[ERR] Group was not found. Passed in code: ' +
        req.body.code +
        ' in /group/edit_group'
    );
});

router.get('/get_groups', async (req, res) => {
  const user = await User.findById(req.user.id);
  const out = user.hostGroups.map(id => Group.findById(id));
  res.send(await Promise.all(out));
});

router.post('/remove_group', async (req, res) => {
  console.log(req.body.id);
  const group = await Group.findById(req.body.id);
  if (group) {
    group.users.forEach(async id => {
      const user = await User.findById(id);
      user.hostGroups = user.hostGroups.filter(el => el !== req.body.id);
      user.save();
    });
    group.events.forEach(async id => {
      const event = await Event.findById(id);
      event.group = '';
      event.save();
    });
    group.remove();
  } else
    console.error(
      '[ERR] Group was not found. Passed in code: ' +
        req.body.id +
        ' in /group/remove_group'
    );
});

router.post('/get_events', async (req, res) => {
  const group = await Group.findById(req.body.id);
  if (group) {
    let out = group.events.map(async el => await Event.findById(el));
    out = await Promise.all(out);
    res.send(out);
  } else
    console.error(
      '[ERR] Group was not found. Passed in id: ' +
        req.body.id +
        ' in /group/get_events'
    );
});

module.exports = router;
