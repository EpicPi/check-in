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

module.exports = router;
