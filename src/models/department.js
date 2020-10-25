const mongoose = require("mongoose");

const department = mongoose.model("department", {
  type: {
    type: String,
  },
});

module.exports = department;