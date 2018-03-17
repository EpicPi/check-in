const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    googleId: String,
    hostEvents: [],
    guestEvents: [],
    name: String,
    extra: Schema.Types.Mixed
});

mongoose.model('users', userSchema);
