const mongoose = require('mongoose');

require('../models/event');
require('../models/user');
const User = mongoose.model('users');
const Event = mongoose.model('events');

module.exports = (router) => {
    router.use('/add_event', async(req,res) =>{
            const event = await Event({name:req.body.name, code:req.body.code}).save();
            const user = await User.findById(req.user.id);
            // user.events = [];
            user.events.push(event);
            user.save();
            res.send('true');
        }
    );

    router.use('/remove_event',
        (req,res) =>{

        }
    );

    router.use('/get_events', async(req, res) => {
        const user = await User.findById(req.user.id);
        // const out = [];
        // for(let event of user.events){
        //     out.push(await Event.findById(event));
        // }
        // res.send(out);
        res.send(user.events);
    });
};
