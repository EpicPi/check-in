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
        const event= await Event.findById(req.body.id);
        if(event){
            const user = await User.findById(req.user.id);
            user.guestEvents.push(event.id);
            user.save();
            event.guestsRSVP.push(user.id);
            event.save();
        }
    });

    router.post('/guest/find',async(req,res)=>{
        const event = await Event.findOne({'code':req.body.code});
        res.send(event);
    });

    //TODO
    router.post('/guest/remove_event', async (req, res) => {
            const user = await User.findById(req.user.id);
            user.guestEvents = user.guestEvents.filter(event => req.body._id !== event);
            user.save();
        }
    );
};
