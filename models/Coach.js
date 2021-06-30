const mongoose = require("mongoose");

const CoachSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  teamName: {
    type: String,
    required: true,
    unique: true,
  },
  sport: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Coach", CoachSchema);
