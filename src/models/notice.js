const mongoose = require("mongoose");

const Notice = mongoose.model("Notice", {
  title: {
    type: String,
  },
  date: {
    type: Date,
  },
  comment: {
    type: String,
  },
});

module.exports = Notice;
