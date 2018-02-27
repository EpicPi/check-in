const mongoose = require('mongoose');
const {Schema} = mongoose;

const eventSchema = new Schema({
    name: String,
    code: String
});

mongoose.model('events',eventSchema);
