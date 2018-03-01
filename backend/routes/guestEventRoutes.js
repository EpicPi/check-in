const mongoose = require('mongoose');

require('../models/event');
require('../models/user');
const User = mongoose.model('users');
const Event = mongoose.model('events');

module.exports = (router) => {

    router.get('/guest/get_events', async (req, res) => {
        const user = await User.findById(req.user.id);
        const out = [];
        for (let i = 0; i < user.guestEvents.length; i++) {
            const a = await Event.findById(user.guestEvents[i]);
            out.push(a);
        }
        res.send(out);
    });

    router.post('/guest/join',async(req,res)=>{
        res.send(req.user);
    })
};
