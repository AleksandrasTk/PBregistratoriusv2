const mongoose = require("mongoose");

const PlayerSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  playerNumber: {
    type: String,
    required: true,
    unique: true,
  },
  role: {
    type: String,
  },
  status: {
    type: String,
    default: "Rest",
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Player", PlayerSchema);
