const express = require("express");
const router = express.Router();
const leaveTypeController = require("../controllers/leave-type-controller");

router.post("/leavetype", leaveTypeController.insertLeaveType);
router.get("/leavetype", leaveTypeController.fetchLeaveType);
router.delete("/leavetype/:id", leaveTypeController.deleteLeaveType);

module.exports = router;
