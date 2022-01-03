const express = require("express");
const app = express();

const main = require("./configs/mongo");
const Player = require("./models/Player");
const Team = require("./models/Team");

main().catch((err) => console.log(err));

app.use(express.json());

app.get("/", (req, res) => {
  res.jsonp("hello world");
});

app.post("/team", async (req, res) => {
  const { name, city } = req.body;
  const team = await Team.create({ name, city });
  res.jsonp({
    message: "success",
    data: team,
  });
});

app.delete("/team/:id", async (req, res) => {
  const team = await Team.findById(req.params.id);
  await team.remove();
  res.jsonp({
    message: "success",
  });
});

app.post("/player", async (req, res) => {
  const { name, team_id } = req.body;
  const player = await Player.create({ name, team_id });
  res.jsonp({
    message: "success",
    data: player,
  });
});

app.listen(process.env.PORT || 3000, () => console.log("server running"));
