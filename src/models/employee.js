const mongoose = require("mongoose");
const Employee = mongoose.model("Employee", {
  name: {
    type: String,
  },
  fatherName: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  dob: {
    type: Date,
  },
  gender: {
    type: String,
  },
  maritialStatus: {
    type: String,
  },
  phoneNumber: {
    type: Number,
  },
  address: {
    type: String,
  },
  nationality: {
    type: String,
  },
  department: {
    type: String,
  },
  designation: {
    type: String,
  },
  status: {
    type: String,
  },
  joiningDate: {
    type: Date,
  },
  leavingDate: {
    type: Date,
  },
  resume: {
    type: String,
  },
  offerLetter: {
    type: String,
  },
  contract: {
    type: String,
  },
  salary: {
    type: Number,
  },
  accountNumber: {
    type: String,
  },
  accountHolderName: {
    type: String,
  },
  bankName: {
    type: String,
  },
  branchCode: {
    type: Number,
  },
  photo: {
    type: Buffer,
  },
});

module.exports = Employee;
