const mongoose = require('mongoose');
const router = require('express').Router();
require('../models/event');
require('../models/user');
const User = mongoose.model('users');
const Event = mongoose.model('events');

router.get('/get_events', async (req, res) => {
    const user = await User.findById(req.user.id);
    const out = [];
    // this cannot be a map function cause js is trippy about async
    for (let i = 0; i < user.guestEvents.length; i++) {
        const a = await Event.findById(user.guestEvents[i]);
        if (!a) {
            //what do we do when host deletes events but ppl already signed up???
        } else
            out.push(a);
    }
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
    }
});

router.post('/find', async (req, res) => {
    const event = await Event.findOne({'code': req.body.code});
    res.send(event);
});

//TODO
router.post('/remove_event', async (req, res) => {
        const user = await User.findById(req.user.id);
        user.guestEvents = user.guestEvents.filter(event => req.body._id !== event);
        user.save();
    }
);

router.post('/checkin', async (req, res) => {
        const event = await Event.findById(req.body.id);
        if (!event.guestsAttend.filter(guest => guest === req.user.id).length) {//not user already checked-in
            event.guestsAttend.push(req.user.id);
            event.save();
            res.send(true);
        } else {
            res.send(false);
        }
    }
);

router.post('/check_checkin', async (req,res) => {
   const event = await Event.findById(req.body.id);
   res.send(event.checkinCode === req.body.code);
});

module.exports = router;
