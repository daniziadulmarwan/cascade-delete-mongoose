const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const playerSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  team_id: {
    type: ObjectId,
    ref: "Team",
  },
});

module.exports = mongoose.model("Player", playerSchema);
