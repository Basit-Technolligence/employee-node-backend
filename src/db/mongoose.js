const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/management-system-api", {
  useNewUrlParser: true,
  useCreateIndex: true,
});

// const emp = new Employee({
//   name: "insan",
//   fatherName: "banda",
//   email: "a@gmail.com",
//   password: 1234567890,
//   dob: 22 - 2 - 2010,
//   gender: "male",
//   maritialStatus: "single",
//   phoneNumber: 0303233232,
//   address: "house # 333 pindi",
//   nationality: "pakistani",
//   department: "software",
//   designation: "developer",
//   status: "active",
//   joiningDate: 22 - 2 - 2010,
//   leavingDate: 22 - 2 - 2010,
//   resume: "empty",
//   offerLetter: "empty",
//   contract: "empty",
//   salary: 1200,
//   accountNumber: 23882933739238,
//   accountHolderName: "hamza",
//   bankName: "Askari",
//   branchCode: 22,
// });
