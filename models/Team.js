const mongoose = require("mongoose");
const Player = require("./Player");

const teamSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  city: {
    type: String,
  },
});

teamSchema.pre("remove", async function (next) {
  const team = this;
  await Player.deleteMany({ team_id: team._id });
  console.log("success");
  next();
});

module.exports = mongoose.model("Team", teamSchema);
