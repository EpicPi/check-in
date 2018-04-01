const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: String,
  hostEvents: [],
  guestEvents: [],
  name: String,
  open: Boolean,
  createdUsers: []
});

mongoose.model('users', userSchema);
