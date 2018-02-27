const mongoose = require('mongoose');
const {Schema} = mongoose;

const eventSchema = new Schema({
    name: String,
});

mongoose.model('users',eventSchema);
