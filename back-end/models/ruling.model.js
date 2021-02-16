// =======================================================================================
// Developed By           : Jhon Alexander López Bohórquez
// Email                  : jalb.23@hotmail.com
// Creation Date          : 2021-02-15 22:33:51
// =======================================================================================
// Version    Description
// [1.0.0]    This class configures the data model for the Ruling database
// =======================================================================================
const mongoose = require("mongoose");

const RulingSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  overview: {
    type: String,
    require: true,
  },
  link: {
    type: String,
    require: true,
  },
  daysLeft: {
    type: Date,
    require: true,
  },
  picture: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  detail: {
    career: {
      type: String,
      require: true,
    },
  },
  votes: {
    like: {
      type: Number,
      require: true,
    },
    dislike: {
      type: Number,
      require: true,
    },
  },
});

const RulingModel = mongoose.model("Rulings", RulingSchema);

module.exports = RulingModel;
