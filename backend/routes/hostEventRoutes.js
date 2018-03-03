const mongoose = require('mongoose');
const router = require('express').Router();
require('../models/event');
require('../models/user');
const User = mongoose.model('users');
const Event = mongoose.model('events');


router.post('/add_event', async (req, res) => {
        const event = await Event({
            name: req.body.name,
            code: req.body.code,
            dates: req.body.dates,
            guestsRSVP:[],
            guestsAttend:[]
        }).save();
        const user = await User.findById(req.user.id);
        // user.events = []; //cleans out event array
        user.hostEvents.push(event.id);
        user.save();
        res.send(event);
    }
);

router.post('/remove_event', async (req, res) => {
        const user = await User.findById(req.user.id);
        user.hostEvents = user.hostEvents.filter(event => req.body._id !== event);
        user.save();

        await Event.findById(req.body._id).remove();
    }
);

router.get('/get_events', async (req, res) => {
    const user = await User.findById(req.user.id);
    const out = [];
    for (let i = 0; i < user.hostEvents.length; i++) {
        const a = await Event.findById(user.hostEvents[i]);
        out.push(a);
    }
    res.send(out);
});

router.post('/edit_event', async (req, res) => {
        const event = await Event.findById(req.body._id);
        //only want to update the editable values
        event.name = req.body.name;
        event.code = req.body.code;
        event.save();
        res.send(event);
    }
);
module.exports = router;
