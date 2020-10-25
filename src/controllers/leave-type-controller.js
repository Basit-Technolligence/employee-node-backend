const HttpError = require("../error/http-error");
const LeaveType = require("../models/leave-type");

const insertLeaveType = async (req, res) => {
  const leaveType = new LeaveType(req.body);
  try {
    await leaveType.save();
    res.status(200).send(leaveType);
  } catch (e) {
    throw new HttpError(e);
  }
};

const fetchLeaveType = async (req, res) => {
  try {
    const type = await LeaveType.find({});
    if (!type) {
      return res.send("no data found");
    }
    res.send(type);
  } catch (e) {
    throw new HttpError(e);
  }
};

const deleteLeaveType = async (req, res) => {
  try {
    const type = await LeaveType.findByIdAndDelete(req.params.id);
    if (!type) {
      return res.status(404).send("no data found");
    }
    res.send(type);
  } catch (e) {
    throw new HttpError(e);
  }
};

exports.insertLeaveType = insertLeaveType;
exports.fetchLeaveType = fetchLeaveType;
exports.deleteLeaveType = deleteLeaveType;
