const mongoose = require('mongoose');
const {Schema} = mongoose;

const eventSchema = new Schema({
    name: String,
    code: String,
    guestsRSVP: [],
    guestsAttend: [],
});

mongoose.model('events',eventSchema);
