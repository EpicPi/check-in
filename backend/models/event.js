const mongoose = require('mongoose');
const {Schema} = mongoose;

const eventSchema = new Schema({
    name: {type: String, required: true},
    code: {type: String, required: true},
    guestsRSVP: [],
    guestsAttend: [],
    dates: {
        rsvpStart: {type: Date},
        rsvpEnd: {type: Date},
        checkinStart: {type: Date},
        checkinEnd: {type: Date}
    },
    type: {type: String, required: true},
    checkinCode: {type: String}
});

mongoose.model('events', eventSchema);
