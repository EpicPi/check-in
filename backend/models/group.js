const mongoose = require('mongoose');
const { Schema } = mongoose;

const groupSchema = new Schema({
  name: String,
  code: String,
  events: [],
  users: []
});

mongoose.model('groups', groupSchema);
