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
  info: { type: String },
  repeats: {
    type: {
      monday: { type: Boolean, default: false },
      tuesday: { type: Boolean, default: false },
      wednesday: { type: Boolean, default: false },
      thursday: { type: Boolean, default: false },
      friday: { type: Boolean, default: false },
      saturday: { type: Boolean, default: false },
      sunday: { type: Boolean, default: false }
    }
  }
});

eventSchema.methods.isRepeat = async function() {
  let isRepeat = false;
  for (let prop in this.repeats) {
    isRepeat = !!(this.repeats[prop] || isRepeat);
  }
  return isRepeat;
};

mongoose.model('events', eventSchema);
