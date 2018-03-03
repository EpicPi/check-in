const mongoose = require('mongoose');
const router = require('express').Router();
require('../models/event');
require('../models/user');
const User = mongoose.model('users');
const Event = mongoose.model('events');

router.post('/rsvp', async (req, res) => {
        const event = await Event.findById(req.body.id);
        //cant use map here cause async await is weird
        const out = [];
        for (let i = 0; i < event.guestsRSVP.length; i++) {
            const a = await User.findById(event.guestsRSVP[i]);
            out.push(a);
        }
        res.send(out);
    }
);
router.post('/attend', async (req, res) => {
        const event = await Event.findById(req.body.id);
        //cant use map here cause async await is weird
        const out = [];
        for (let i = 0; i < event.guestsAttend.length; i++) {
            const a = await User.findById(event.guestsAttend[i]);
            out.push(a);
        }
        res.send(out);
    }
);
module.exports = router;
