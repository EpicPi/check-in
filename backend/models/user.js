const mongoose = require('mongoose');
const {Schema} = mongoose;

const userSchema = new Schema({
    googleId: String,
    events: [],
    name: String,
});

mongoose.model('users',userSchema);
