const mongoose = require("mongoose");
const Leave = mongoose.model("Leave", {
  type: {
    type: String,
  },
  from: {
    type: Date,
  },
  to: {
    type: Date,
  },
  comment: {
    type: String,
  },
  employeeId: {
    type: String,
  },
  status: {
    type: String,
  },
  authority: {
    type: String,
  },
});

module.exports = Leave;
