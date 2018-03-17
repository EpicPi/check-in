const mongoose = require('mongoose');
const router = require('express').Router();
require('../models/event');
const Event = mongoose.model('events');

router.get('/get_event', async (req, res) => {
    const event = await Event.findOne({ type: 'open', code: req.query.code });
    res.send(event);
});

router.post('/join', async (req, res) => {
    const event = await Event.findOne({ type: 'open', code: req.body.code });
    if (event) {
        event.guestsAttend.push(req.body.id);
        event.save();
    }
});

module.exports = router;
