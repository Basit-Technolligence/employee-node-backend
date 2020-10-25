const mongoose = require("mongoose");
const Visitor = mongoose.model("Visitor", {
  name: {
    type: String,
  },
  cnic: {
    type: Number,
  },
  number: {
    type: Number,
  },
  purpose: {
    type: String,
  },
  dateTime: {
    type: Date,
  },
});

module.exports = Visitor;
