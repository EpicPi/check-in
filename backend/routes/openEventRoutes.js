const mongoose = require('mongoose');
const router = require('express').Router();
require('../models/event');
const Event = mongoose.model('events');

router.get('/get_event', async (req, res) => {
    const event = await Event.findOne({ type: 'open', code: req.query.code });
    res.send(event);
});

module.exports = router;
