const mongoose = require("mongoose");

const PlayerSchema = mongoose.Schema({
  coach: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "coaches",
  },
  name: {
    type: String,
    required: true,
  },
  playerNumber: {
    type: Number,
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
