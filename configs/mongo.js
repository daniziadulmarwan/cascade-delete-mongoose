const mongoose = require("mongoose");

async function main() {
  await mongoose
    .connect("mongodb://127.0.0.1:27017/cascade")
    .then(() => console.log("database connected"));
}

module.exports = main;
