const express = require("express");
const app = express();
const employeeRouter = require("./router/employee-router");
const leaveTypeRouter = require("./router/leave-type-router");
const userLeaveRouter = require("./router/user-leave-router");
const visitorRouter = require("./router/visitor-router");
const dptRouter = require("./router/department-router");

const noticeRouter = require("./router/notice-router");
const port = process.env.port || 5000;
require("./db/mongoose");
require("dotenv").config();
const cors = require("cors");

app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,POST,PATCH,DELETE");
  res.header("Access-Control-Allow-Headers", "Content-type");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});
app.use(employeeRouter);
app.use(leaveTypeRouter);
app.use(userLeaveRouter);
app.use(visitorRouter);
app.use(dptRouter);
app.use(noticeRouter);
app.listen(port, () => {
  console.log("Server Connected");
});
