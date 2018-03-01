const mongoose = require('mongoose');

require('../models/event');
require('../models/user');
const User = mongoose.model('users');
const Event = mongoose.model('events');

module.exports = (router) => {

    //TODO
    router.get('/guest/get_events', async (req, res) => {
        const user = await User.findById(req.user.id);
        const out = [];
        for (let i = 0; i < user.guestEvents.length; i++) {
            const a = await Event.findById(user.guestEvents[i]);
            out.push(a);
        }
        res.send(out);
    });

    //TODO
    router.post('/guest/join',async(req,res)=>{
        res.send(req.user);
    });

    //TODO
    router.post('/guest/remove_event', async (req, res) => {
            const user = await User.findById(req.user.id);
            user.guestEvents = user.guestEvents.filter(event => req.body._id !== event);
            user.save();
        }
    );
};
