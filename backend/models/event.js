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
    // rsvpEnd: {type: Date, required: true},
    // checkinStart: {type: Date, required: true},
    // checkinEnd: {type: Date, required: true},
});

mongoose.model('events',eventSchema);
