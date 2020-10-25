const mongoose = require("mongoose");

const LeaveType = mongoose.model("LeaveType", {
  type: {
    type: String,
  },
});

module.exports = LeaveType;
