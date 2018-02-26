const passport = require('passport');
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users');
const Event = mongoose.model('events');

module.exports = (router) => {
    router.use('/event/add',
        (req,res) =>{

        }
    );

    router.use('/event/remove',
        (req,res) =>{

        }
    );

    router.use('/getEvents', (req, res) => {

    });


};
