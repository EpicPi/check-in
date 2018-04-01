const mongoose = require('mongoose');
const { Schema } = mongoose;

const groupSchema = new Schema({
  name: String,
  code: String,
  events: [],
  hosts: []
});

mongoose.model('groups', groupSchema);
