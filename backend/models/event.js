const mongoose = require('mongoose');
const { Schema } = mongoose;

const eventSchema = new Schema({
  name: { type: String, required: true },
  code: { type: String, required: true },
  guestsRSVP: [],
  guestsAttend: [
    {
      timestamp: { type: Date, default: Date.now }
    }
  ],
  open: {
    guestsRSVP: [],
    walkin: []
  },
  dates: {
    rsvpStart: { type: String },
    rsvpEnd: { type: String },
    checkinStart: { type: String },
    checkinEnd: { type: String }
  },
  type: { type: String, required: true },
  checkinCode: { type: String },
  info: { type: String }
});

mongoose.model('events', eventSchema);
